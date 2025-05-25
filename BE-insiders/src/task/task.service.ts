import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskBoradService } from 'src/task-borad/task-borad.service';
import { IToken } from 'src/shared/type/IToken';
import { ChangeTaskStateDto } from 'src/task-borad/dto/change-state-task.dto';
import { ChangeTaskDto } from './dto/change-task.dto';
import { ContributorsRole } from 'src/contributer/enum/contributer-role.enum';
import { contributorsRole } from 'src/contributer/config/contributer-role';
import { ContributerService } from 'src/contributer/contributer.service';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private taskBoradService: TaskBoradService,
    private contributerService: ContributerService,

  ) { }
  async findTaskBoardByTaskId(taskId: string) {
    try {
      const taskWithBoard = await this.prisma.task.findUnique({
        where: { id: taskId },
        include: {
          taskBoard: {
            include: {
              contributors: true
            }
          },
        },
      });
      return taskWithBoard?.taskBoard ?? null;
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }

  }
  async createTask(user: IToken, data: CreateTaskDto): Promise<boolean> {
    try {
      const checkPremmission = this.taskBoradService.checkPremisssionByTaskBoardId(user, data.taskBoardId, contributorsRole.writer)
      if (!checkPremmission) {
        throw new Error('Failed to premission');
      }
      const taskBoard = await this.taskBoradService.getById(data.taskBoardId)
      if (!taskBoard) {
        throw new NotFoundException('TaskBoard not found');
      }
      if (user.id != taskBoard.ownerId) {
        throw new ForbiddenException('You do not have access to this TaskBoard');
      }
      await this.prisma.task.create({
        data,
      });
      return true
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }
  }
  async changeStateTask(user: IToken, data: ChangeTaskStateDto) {
    try {
      const checkPremmission = this.checkPremisssionByTaskId(user, data.id, contributorsRole.writer)
      if (!checkPremmission) {
        throw new Error('Failed to premission');
      }

      await this.prisma.task.update({
        where: {
          id: data.id
        },
        data: {
          isComplete: data.state
        }
      })
      return true

    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }
  }
  async checkPremisssionByTaskId(user: IToken, id: string, premission: ContributorsRole) {
    try {
      const taskBoard = await this.findTaskBoardByTaskId(id)
      if (!taskBoard) {
        throw new NotFoundException('TaskBoard not found');
      }
      return await this.contributerService.checkPremission(user, taskBoard, premission)
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }
  }
  async changeTask(user: IToken, data: ChangeTaskDto) {
    try {
      const checkPremmission = await this.checkPremisssionByTaskId(user, data.id, contributorsRole.writer)
      if (!checkPremmission) {
        throw new Error('Failed to premission');
      }
      await this.prisma.task.update({
        where: {
          id: data.id
        },
        data: {
          title: data.title,
          description: data.description,
        }
      })
      return true
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }
  }
  async delete(id: string) {
    try {
      await this.prisma.task.delete({
        where: {
          id: id
        },
      })
      return true

    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }
  }
}

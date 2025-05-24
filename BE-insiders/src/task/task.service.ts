import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskBoradService } from 'src/task-borad/task-borad.service';
import { IToken } from 'src/shared/type/IToken';
import { ChangeTaskStateDto } from 'src/task-borad/dto/change-state-task.dto';
import { ChangeTaskDto } from './dto/change-task.dto';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    private taskBoradService: TaskBoradService
  ) { }
  async createTask(user: IToken, data: CreateTaskDto): Promise<boolean> {
    try {
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
  async changeTask(data: ChangeTaskDto) {
    try {
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

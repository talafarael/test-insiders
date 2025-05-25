import { ForbiddenException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskBoardDto } from './dto/create-task-board.dto';
import { IToken } from 'src/shared/type/IToken';
import { ContributerService } from 'src/contributer/contributer.service';
import { ContributorsRole } from 'src/contributer/enum/contributer-role.enum';
import { contributorsRole } from 'src/contributer/config/contributer-role';

@Injectable()
export class TaskBoradService {
  constructor(
    private prisma: PrismaService,
    private contributerService: ContributerService,
  ) { }
  async createTaskBoard(user: IToken, data: CreateTaskBoardDto) {
    try {
      await this.prisma.taskBoard.create({
        data: {
          title: data.title,
          description: data.description,
          ownerId: user.id,
        },
      });
      return true
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw error
    }
  }
  async checkPremisssionByTaskBoardId(user: IToken, id: string, premission: ContributorsRole) {
    try {
      const taskBoard = await this.getById(id)
      if (!taskBoard) {
        throw new NotFoundException('TaskBoard not found');
      }
      return await this.contributerService.checkPremission(user, taskBoard, premission)
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw error
    }
  }

  async getById(id: string) {
    try {
      const taskBoard = await this.prisma.taskBoard.findFirst({
        where: { id: id },
        include: {
          tasks: true,
          contributors: true
        }
      });
      return taskBoard
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw error
    }

  }
  async getTaskBoard(user: IToken, id: string) {
    try {
      const taskBoard = await this.getById(id)
      if (!taskBoard) {
        throw new NotFoundException('TaskBoard not found');
      }
      await this.checkPremisssionByTaskBoardId(user, id, contributorsRole.writer)
      return taskBoard
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw error
    }
  }

}

import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskBoardDto } from './dto/create-task-board.dto';
import { IToken } from 'src/shared/type/IToken';

@Injectable()
export class TaskBoradService {
  constructor(private prisma: PrismaService) { }
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
      throw new Error('Failed to create TaskBoard');
    }
  }
  async getById(id: string) {
    try {
      const taskBoard = await this.prisma.taskBoard.findFirst({
        where: { id: id },
        include: {
          tasks: true
        }
      });
      return taskBoard
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }

  }
  async changeStateTask(user: IToken, data: CreateTaskBoardDto) {
    try {


    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }
  }

  async getTaskBoard(user: IToken, id: string) {
    try {
      const taskBoard = await this.getById(id)
      if (!taskBoard) {
        throw new NotFoundException('TaskBoard not found');
      }
      if (user.id != taskBoard.ownerId) {
        throw new ForbiddenException('You do not have access to this TaskBoard');
      }
      return taskBoard
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw new Error('Failed to create TaskBoard');
    }
  }
}

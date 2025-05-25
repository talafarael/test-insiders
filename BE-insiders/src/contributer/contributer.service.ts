import { BadRequestException, ForbiddenException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IToken } from 'src/shared/type/IToken';
import { TaskBoradService } from 'src/task-borad/task-borad.service';
import { UserService } from 'src/user/user.service';
import { CreateContributerDto } from './dto/createContributer.dto';
import { ContributorsRole } from './enum/contributer-role.enum';

@Injectable()
export class ContributerService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => TaskBoradService))
    private taskBoradService: TaskBoradService,
    private userService: UserService,
  ) { }
  async addContributer(owner: IToken, data: CreateContributerDto) {
    try {

      const taskBoard = await this.taskBoradService.getById(data.id)
      if (!taskBoard) {
        throw new NotFoundException('TaskBoard not found');
      }
      if (owner.id != taskBoard.ownerId) {
        throw new ForbiddenException('You do not have access to this TaskBoard');
      }

      const user = await this.userService.findOneByEmail(data.email)
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const existing = await this.prisma.contributer.findFirst({
        where: {
          taskBoardId: taskBoard.id,
          userId: user.id,
        },
      });
      if (existing) throw new BadRequestException('User is already a contributor');
      return await this.prisma.contributer.create({
        data: {
          taskBoardId: taskBoard.id,
          userId: user.id,
          role: data.role,
        },
      });
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw error
    }
  }
  async checkPremission(user: IToken, taskBoard: any, premission: ContributorsRole) {
    try {
      if (taskBoard.ownerId == user.id) {
        return true
      }
      const contributer = await taskBoard?.contributors.find((elem) => elem.userId == user.id)
      if (!contributer) {
        throw new NotFoundException('Contributor not found');
      }
      if (contributer.role == premission) {
        return true
      }
      throw new ForbiddenException('You do not have access to this TaskBoard');
    } catch (error) {
      console.error('Error creating TaskBoard:', error);
      throw error
    }
  }
}

import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskBoradModule } from 'src/task-borad/task-borad.module';
import { ContributerModule } from 'src/contributer/contributer.module';

@Module({
  imports: [PrismaModule, TaskBoradModule, ContributerModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule { }

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskBoradModule } from './task-borad/task-borad.module';
import { TaskModule } from './task/task.module';
import { ContributerModule } from './contributer/contributer.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, TaskBoradModule, TaskModule, ContributerModule],
})
export class AppModule { }

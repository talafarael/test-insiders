import { Module } from '@nestjs/common';
import { TaskBoradService } from './task-borad.service';
import { TaskBoradController } from './task-borad.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TaskBoradController],
  providers: [TaskBoradService],
  exports: [TaskBoradService]
})
export class TaskBoradModule { }

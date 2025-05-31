import { forwardRef, Module } from '@nestjs/common';
import { TaskBoradService } from './task-borad.service';
import { TaskBoradController } from './task-borad.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ContributerModule } from 'src/contributer/contributer.module';

@Module({
  imports: [PrismaModule,
    ContributerModule],
  controllers: [TaskBoradController],
  providers: [TaskBoradService],
  exports: [TaskBoradService]
})
export class TaskBoradModule { }

import { forwardRef, Module } from '@nestjs/common';
import { ContributerService } from './contributer.service';
import { ContributerController } from './contributer.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskBoradModule } from 'src/task-borad/task-borad.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, forwardRef(() => TaskBoradModule), UserModule],
  controllers: [ContributerController],
  providers: [ContributerService],
  exports: [ContributerService]
})
export class ContributerModule { }

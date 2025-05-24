import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { TaskBoradService } from './task-borad.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request as ExpressRequest } from 'express'; import { IToken } from 'src/shared/type/IToken';
import { CreateTaskBoardDto } from './dto/create-task-board.dto';

@Controller('task-borad')
export class TaskBoradController {
  constructor(private readonly taskBoradService: TaskBoradService) { }
  @Post("")
  @UseGuards(JwtAuthGuard)
  async createTaskBoard(@Request() data: ExpressRequest & { user: IToken }, @Body() body: CreateTaskBoardDto) {
    this.taskBoradService.createTaskBoard(data.user, body)
  }
  @Get(":id")
  @UseGuards(JwtAuthGuard)
  async getTaskBoardById(@Request() data: ExpressRequest & { user: IToken }, @Param('id') id: string) {
    return await this.taskBoradService.getTaskBoard(data.user, id)
  }

}

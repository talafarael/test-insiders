import { Body, Controller, Param, Delete, Post, Request, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request as ExpressRequest } from 'express'; import { IToken } from 'src/shared/type/IToken';
import { CreateTaskDto } from './dto/create-task.dto';
import { ChangeTaskStateDto } from 'src/task-borad/dto/change-state-task.dto';
import { ChangeTaskDto } from './dto/change-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }
  @Post("")
  @UseGuards(JwtAuthGuard)
  async createTaskBoard(@Request() data: ExpressRequest & { user: IToken }, @Body() body: CreateTaskDto) {
    return await this.taskService.createTask(data.user, body)
  }
  @Post("change-state-task")
  @UseGuards(JwtAuthGuard)
  async cahgneStateTask(@Request() data: ExpressRequest & { user: IToken }, @Body() body: ChangeTaskStateDto) {
    return await this.taskService.changeStateTask(data.user, body)
  }
  @Post("change-task")
  @UseGuards(JwtAuthGuard)
  async cahgneTask(@Body() body: ChangeTaskDto) {
    return await this.taskService.changeTask(body)
  }
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  async getTaskBoardById(@Param('id') id: string) {
    return await this.taskService.delete(id)
  }

}


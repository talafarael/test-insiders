import { Body, Controller, Param, Delete, Post, Request, UseGuards, UseFilters } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request as ExpressRequest } from 'express'; import { IToken } from 'src/shared/type/IToken';
import { CreateTaskDto } from './dto/create-task.dto';
import { ChangeTaskStateDto } from 'src/task-borad/dto/change-state-task.dto';
import { ChangeTaskDto } from './dto/change-task.dto';
import { AllExceptionsFilter } from 'src/filter/http-exception.filter';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Tasks')
@ApiBearerAuth()
@UseFilters(AllExceptionsFilter)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }
  @Post("")
  @ApiBody({ type: CreateTaskDto })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  async createTaskBoard(@Request() data: ExpressRequest & { user: IToken }, @Body() body: CreateTaskDto) {
    return await this.taskService.createTask(data.user, body)
  }
  @Post("change-state-task")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Change task state (complete/incomplete)' })
  @ApiBody({ type: ChangeTaskStateDto })
  @ApiResponse({ status: 200, description: 'Task state changed' })
  async cahgneStateTask(@Request() data: ExpressRequest & { user: IToken }, @Body() body: ChangeTaskStateDto) {
    return await this.taskService.changeStateTask(data.user, body)
  }
  @Post("change-task")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Change task data (title, description)' })
  @ApiBody({ type: ChangeTaskDto })
  @ApiResponse({ status: 200, description: 'Task updated' })
  async cahgneTask(@Request() data: ExpressRequest & { user: IToken }, @Body() body: ChangeTaskDto) {
    return await this.taskService.changeTask(data.user, body)
  }
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiParam({ name: 'id', description: 'Task ID' })
  @ApiResponse({ status: 200, description: 'Task deleted' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async getTaskBoardById(@Param('id') id: string) {
    return await this.taskService.delete(id)
  }

}


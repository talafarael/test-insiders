import { Body, Controller, Get, Param, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { TaskBoradService } from './task-borad.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request as ExpressRequest } from 'express'; import { IToken } from 'src/shared/type/IToken';
import { CreateTaskBoardDto } from './dto/create-task-board.dto';
import { AllExceptionsFilter } from 'src/filter/http-exception.filter';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseFilters(AllExceptionsFilter)
@ApiBearerAuth()
@ApiTags('Task Board')
@Controller('task-borad')
export class TaskBoradController {
  constructor(private readonly taskBoradService: TaskBoradService) { }
  @Post("")
  @ApiOperation({ summary: 'Create a new task board' })
  @ApiBody({ type: CreateTaskBoardDto })
  @ApiResponse({ status: 201, description: "true" })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  async createTaskBoard(@Request() data: ExpressRequest & { user: IToken }, @Body() body: CreateTaskBoardDto) {
    this.taskBoradService.createTaskBoard(data.user, body)
  }
  @Get(":id")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get task board by ID' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the task board' })
  @ApiResponse({ status: 200, description: 'Returns task board data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Task board not found' })
  async getTaskBoardById(@Request() data: ExpressRequest & { user: IToken }, @Param('id') id: string) {
    return await this.taskBoradService.getTaskBoard(data.user, id)
  }

}

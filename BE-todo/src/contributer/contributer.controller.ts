import { ContributerService } from './contributer.service';
import { Body, Controller, Get, Param, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Request as ExpressRequest } from 'express'; import { IToken } from 'src/shared/type/IToken';
import { CreateContributerDto } from './dto/createContributer.dto';
import { AllExceptionsFilter } from 'src/filter/http-exception.filter';

@UseFilters(AllExceptionsFilter)
@Controller('contributer')
export class ContributerController {
  constructor(private readonly contributerService: ContributerService) { }
  @Post("")
  @UseGuards(JwtAuthGuard)
  async createTaskBoard(@Request() data: ExpressRequest & { user: IToken }, @Body() body: CreateContributerDto) {
    this.contributerService.addContributer(data.user, body)
  }
}

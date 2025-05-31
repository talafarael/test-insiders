import { Controller, Get, Request, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Request as ExpressRequest } from 'express'; import { IToken } from 'src/shared/type/IToken';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AllExceptionsFilter } from 'src/filter/http-exception.filter';

@UseFilters(AllExceptionsFilter)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get("")
  @UseGuards(JwtAuthGuard)
  async get(@Request() data: ExpressRequest & { user: IToken }) {
    return await this.userService.findOneByEmail(data.user.email)
  }
}

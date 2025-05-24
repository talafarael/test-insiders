import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    return req.logout();
  }
  @Post('registration')
  async registration(@Body() req: RegistrationDto) {
    return await this.authService.registration(req)
  }


}

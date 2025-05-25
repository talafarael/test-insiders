import { AuthService } from './auth.service';
import { Body, Controller, Post, Request, UseFilters, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegistrationDto } from './dto/registration.dto';
import { AllExceptionsFilter } from 'src/filter/http-exception.filter';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthResponse } from './dto/auth-response.dto';

@ApiTags('Auth')
@UseFilters(AllExceptionsFilter)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 201, type: AuthResponse })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }
  @ApiOperation({ summary: 'Logout user' }) @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    return await req.logout();
  }
  @ApiOperation({ summary: 'User registration' })
  @ApiBody({ type: RegistrationDto })
  @ApiResponse({ status: 201, type: AuthResponse })
  @Post('registration')
  async registration(@Body() req: RegistrationDto) {
    return await this.authService.registration(req)
  }


}

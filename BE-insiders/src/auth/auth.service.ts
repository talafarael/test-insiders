import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { RegistrationDto } from './dto/registration.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResponse } from './dto/auth-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      const verifyPassword = await bcrypt.compareSync(pass, user.password);

      if (!verifyPassword) {
        return null
      }
      return user
    }
    return null;
  }
  async registration(data: RegistrationDto): Promise<AuthResponse> {
    try {
      const user = await this.userService.findOneByEmail(data.email)
      if (user) {
        throw new ConflictException('This email is already in use');
      }
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.password, saltRounds);

      const newUser = await this.prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashedPassword
        }
      })
      const payload = { email: newUser.email, id: newUser.id };

      return {
        token: this.jwtService.sign(payload),
      }
    } catch (e) {
      console.error(e)
      throw new Error(e);
    }
  }

  async login(user: LoginDto): Promise<AuthResponse> {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

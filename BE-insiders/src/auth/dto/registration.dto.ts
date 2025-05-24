import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegistrationDto {
  @ApiProperty({ example: 'JohnDoe' })
  @IsEmail()
  email: string;
  @ApiProperty({ example: 'name!' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'StrongPassword123!' })
  @IsString()
  password: string;

}

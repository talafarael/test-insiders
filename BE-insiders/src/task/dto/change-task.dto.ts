import { IsString, isString } from "class-validator";

export class ChangeTaskDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  id: string;

}

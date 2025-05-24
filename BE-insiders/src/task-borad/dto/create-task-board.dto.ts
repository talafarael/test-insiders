import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateTaskBoardDto {
  @ApiProperty({ example: 'Title!' })
  @IsString()
  title: string;
  @ApiProperty({ example: 'Desc!' })
  @IsString()
  description?: string
}

import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class ChangeTaskStateDto {
  @ApiProperty({ example: 'Title!' })
  @IsBoolean()
  state: boolean;
  @ApiProperty({ example: 'Desc!' })
  @IsString()
  id: string
}


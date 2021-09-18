import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import * as mongoose from 'mongoose'

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  bar: string

  @IsNotEmpty()
  @IsString()
  text: string
}

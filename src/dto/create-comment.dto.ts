import { IsNotEmpty, IsString } from 'class-validator'

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  bar: string

  @IsNotEmpty()
  @IsString()
  text: string
}

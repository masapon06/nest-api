import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator'
import * as mongoose from 'mongoose'

export class CreateBarDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  name: string

  @IsNotEmpty()
  @IsBoolean()
  isPaperCigarette: boolean

  @IsNotEmpty()
  @IsBoolean()
  isIQos: boolean

  @IsNotEmpty()
  @IsBoolean()
  isVape: boolean

  @IsNotEmpty()
  @IsString()
  PrivateRoom: string // MEMO: 完全個室あり or 半個室あり or 個室なし

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsNumber()
  telephone: number

  @IsOptional()
  comments: string[]
}

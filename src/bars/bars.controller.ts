import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common'
import { BarsService } from './bars.service'
import { CreateBarDto } from '../dto/create-bar.dto'
import { Query } from '@nestjs/common'
import { Bar } from 'src/schemas/bar.schema'

@Controller('bars')
export class BarsController {
  constructor(private barsService: BarsService) {}

  @Post()
  async create(@Body(ValidationPipe) createBarDto: CreateBarDto) {
    return this.barsService.create(createBarDto)
  }

  @Get()
  async findAll(
    @Query('name') name,
    @Query('paper') paper: boolean,
    @Query('iqos') iqos: boolean,
    @Query('vape') vape: boolean
  ): Promise<Bar[]> {
    const bars = await this.barsService.find(name, paper, iqos, vape)
    return bars
  }

  @Get(':id')
  async findById(@Param() params): Promise<Bar> {
    const bar = await this.barsService.findById(params)
    return bar
  }
}

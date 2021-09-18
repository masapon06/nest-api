import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common'
import { BarsService } from './bars.service'
import { CreateBarDto } from '../dto/create-bar.dto'
import { Query } from '@nestjs/common'
import { Bar } from 'src/schemas/bar.schema'

@Controller('bars')
export class BarsController {
  constructor(private barsService: BarsService) {}

  @Post()
  async create(@Body(ValidationPipe) createBarDto: CreateBarDto) {
    this.barsService.create(createBarDto)
  }

  @Get()
  async findAll(
    @Query('name') name,
    @Query('paper') paper: boolean,
    @Query('iqos') iqos: boolean,
    @Query('vape') vape: boolean
  ): Promise<Bar[]> {
    return this.barsService.find(name, paper, iqos, vape)
  }

  @Get(':id')
  async findById(@Param() params): Promise<Bar> {
    try {
      const res = await this.barsService.findById(params)
      console.log(res)
      return res
    } catch (err) {
      return err
    }
  }
}

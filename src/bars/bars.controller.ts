import { Body, Controller, Get, HttpStatus, Param, Post, Query, Res } from '@nestjs/common'
import { BarsService } from './bars.service'
import { CreateBarDto } from './dto/create-bar.dto'
import { Bar } from './interfaces/bar.interface'

@Controller('bars')
export class BarsController {
    constructor(private barsService: BarsService) {}

    @Post()
    async create(@Body() createBarDto: CreateBarDto) {
        this.barsService.create(createBarDto)
    }

    @Get()
    async findAll(
        @Query('name') name, 
        @Query('paper') paper: boolean,
        @Query('iqos') iqos: boolean,
        @Query('vape') vape: boolean,
    ): Promise<Bar[]> {
        return this.barsService.findAll(name, paper, iqos, vape)
    }
}
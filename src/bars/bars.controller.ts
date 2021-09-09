import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common'
import { Response } from 'express'
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
    async findAll(): Promise<Bar[]> { // MEMO: reqを受け取りたいとき => findAll(@Req() request: Request)
        return this.barsService.findAll()
    }
    
}
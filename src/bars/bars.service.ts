import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Bar, BarDocument } from "src/schemas/bar.schema";
import { CreateBarDto } from "./dto/create-bar.dto";

@Injectable()
export class BarsService {
    constructor(@InjectModel(Bar.name) private barModel: Model<BarDocument>) {}

    async create(createBarDto: CreateBarDto): Promise<Bar>{
        const createdBar = new this.barModel(createBarDto)
        return createdBar.save()
    }

    async findAll(): Promise<Bar[]> {
        return this.barModel.find().exec()
    }
}
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateBarDto } from 'src/dto/create-bar.dto'
import { Bar, BarDocument } from 'src/schemas/bar.schema'

@Injectable()
export class BarsService {
  constructor(@InjectModel(Bar.name) private barModel: Model<BarDocument>) {}

  async create(createBarDto: CreateBarDto): Promise<Bar> {
    const createdBar = new this.barModel({
      ...createBarDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return createdBar.save()
  }

  async find(name, paperCigarette, iqos, vape): Promise<Bar[]> {
    const filter: {
      name?: RegExp
      isPaperCigarette?: boolean
      isIQos?: boolean
      isVape?: boolean
    } = {}

    filter.name = new RegExp(name) // TODO: 無理やり正規表現で検索実装したけれどパフォーマンス的に良いのかは要検証
    if (paperCigarette === 'true') filter.isPaperCigarette = true
    if (iqos === 'true') filter.isIQos = true
    if (vape === 'true') filter.isVape = true

    const bars = await this.barModel.find(filter).exec()
    return bars
  }

  async findById(param): Promise<Bar> {
    const bar = await this.barModel
      .findById(param.id)
      .populate('comments')
      .lean()
    return bar
  }
}

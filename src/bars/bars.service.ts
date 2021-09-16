import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Bar, BarDocument } from 'src/schemas/bar.schema'
import { CreateBarDto } from '../dto/create-bar.dto'

@Injectable()
export class BarsService {
  constructor(@InjectModel(Bar.name) private barModel: Model<BarDocument>) {}

  async create(createBarDto: CreateBarDto): Promise<Bar> {
    const createdBar = new this.barModel(createBarDto)
    return createdBar.save()
  }

  async findAll(name, paperCigarette, iqos, vape): Promise<Bar[]> {
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

    return this.barModel.find(filter).exec()
  }
}

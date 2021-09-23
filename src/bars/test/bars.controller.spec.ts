import * as mongoose from 'mongoose'
import { Test } from '@nestjs/testing'
import { BarsController } from '../bars.controller'
import { BarsService } from '../bars.service'
import { Bar } from '../../schemas/bar.schema'
import { barStub } from './stubs/bars.stub'
import { findByIdBarStub } from './stubs/bar.findById.stub'
import { CreateBarDto } from 'src/dto/create-bar.dto'

jest.mock('../bars.service')

describe('BarsController', () => {
  let barsController: BarsController
  let barsService: BarsService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [BarsController],
      providers: [BarsService],
    }).compile()

    barsService = moduleRef.get<BarsService>(BarsService)
    barsController = moduleRef.get<BarsController>(BarsController)
    jest.clearAllMocks()
  })

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let bars: Bar[]

      beforeEach(async () => {
        bars = await barsController.findAll(null, false, false, false)
      })

      test('then it should call barsService', () => {
        expect(barsService.find).toHaveBeenCalled()
      })

      test('then it should return bars', () => {
        expect(bars).toEqual([barStub()])
      })
    })
  })

  describe('findById', () => {
    describe('when findById is called', () => {
      let bar: Bar

      beforeEach(async () => {
        bar = await barsController.findById(findByIdBarStub()._id)
      })

      test('then it should call barsService', () => {
        expect(barsService.findById).toHaveBeenCalled()
      })

      test('then it should return specific bar', async () => {
        expect(bar).toEqual(findByIdBarStub())
      })
    })
  })

  describe('create', () => {
    describe('when create is called', () => {
      let bar: Bar

      beforeEach(async () => {
        const createBarDto: CreateBarDto = {
          name: 'hogehoge居酒屋',
          isPaperCigarette: false,
          isIQos: false,
          isVape: false,
          PrivateRoom: '完全個室あり',
          address: '東京都新宿区',
          telephone: 123,
          comments: [],
        }
        bar = await barsController.create(createBarDto)
        console.log(bar)
      })

      test('then it should call barsService', () => {
        expect(barsService.create).toHaveBeenCalled()
      })

      test('then it should return 201', () => {
        expect(bar).toEqual(barStub()) // MEMO: mongoの_idを自動で作成して返す処理は未実装
      })
    })
  })
})

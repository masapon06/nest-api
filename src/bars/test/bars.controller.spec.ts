import { Test } from '@nestjs/testing'
import { BarsController } from '../bars.controller'
import { BarsService } from '../bars.service'
import { Bar } from '../../schemas/bar.schema'
import { barStub } from './stubs/bars.stub'

jest.mock('../bars.service') // TODO: これモック作成しているぽいけど詳しく調べる

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
    jest.clearAllMocks() // TODO: これなぜclearしなければならないのか調べる
  })

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let bars: Bar[]

      beforeEach(async () => {
        bars = await barsController.findAll(null, false, false, false)
      })

      test('then it should call barsService', () => {
        expect(barsService.find).toHaveBeenCalled() // TODO: toHaveBeenCalledがどんなメソッドなのか調べる
      })

      test('then it should return bars', () => {
        expect(bars).toEqual([barStub()])
      })
    })
  })
})

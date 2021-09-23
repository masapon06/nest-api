import * as mongoose from 'mongoose'
import { Test } from '@nestjs/testing'
import { BarsController } from '../bars.controller'
import { BarsService } from '../bars.service'
import { Bar } from '../../schemas/bar.schema'
import { barStub } from './stubs/bars.stub'
import { findByIdBarStub } from './stubs/bar.findById.stub'

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
})

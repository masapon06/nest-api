import { Test } from '@nestjs/testing'
import { BarsController } from 'src/bars/bars.controller'
import { BarsService } from 'src/bars/bars.service'

describe('BarsController', () => {
  let barsController: BarsController
  let barsService: BarsService

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BarsController],
      providers: [BarsService],
    }).compile()

    barsService = moduleRef.get<BarsService>(BarsService)
    barsController = moduleRef.get<BarsController>(BarsController)
  })

  describe('findAll', () => {
    it('should return an array of bars', async () => {
      const result = ['test']
      jest.spyOn(barsService, 'findAll').mockImplementation(() => result)

      expect(await barsController.findAll()).toBe(result)
    })
  })
})

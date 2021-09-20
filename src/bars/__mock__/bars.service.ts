import { barStub } from '../test/stubs/bars.stub'

export const BarsService = jest.fn().mockReturnValue({
  findAll: jest.fn().mockResolvedValue([barStub()]),
})

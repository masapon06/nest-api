import { barStub } from '../test/stubs/bars.stub'

export const BarsService = jest.fn().mockReturnValue({
  find: jest.fn().mockResolvedValue([barStub()]),
})

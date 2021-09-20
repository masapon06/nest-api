import { Bar } from 'src/schemas/bar.schema'

export const barStub = (): Bar => {
  return {
    name: 'hogehoge居酒屋',
    isPaperCigarette: false,
    isIQos: false,
    isVape: false,
    PrivateRoom: '完全個室あり',
    address: '東京都新宿区',
    telephone: 123,
    comments: [],
    createdAt: new Date(2021, 1, 1),
    updatedAt: new Date(2021, 1, 1),
  }
}

import * as mongoose from 'mongoose'

export interface BarType {
  _id: mongoose.Types.ObjectId
  name: string
  isPaperCigarette: boolean
  isIQos: boolean
  isVape: boolean
  PrivateRoom: string
  address: string
  telephone: number
  comments: Array<mongoose.Types.ObjectId>
  createdAt: Date
  updatedAt: Date
}

export const findByIdBarStub = (): BarType => {
  return {
    _id: mongoose.Types.ObjectId('613c55f55de4fe06c9629461'),
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

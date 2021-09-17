import * as mongoose from 'mongoose'

export class CreateBarDto {
  name: string
  isPaperCigarette: boolean
  isIQos: boolean
  isVape: boolean
  PrivateRoom: string // MEMO: 完全個室あり or 半個室あり or 個室なし
  address: string
  telephone: number
  comments: mongoose.Schema.Types.ObjectId[]
}

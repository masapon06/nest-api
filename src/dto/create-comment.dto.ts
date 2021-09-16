import * as mongoose from 'mongoose'

export class CreateCommentDto {
  _id: mongoose.Schema.Types.ObjectId
  bar: mongoose.Schema.Types.ObjectId
  text: string
  createdAt: Date
  updatedAt: Date
}

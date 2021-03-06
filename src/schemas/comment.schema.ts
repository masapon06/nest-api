import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Bar } from './bar.schema'

export type CommentDocument = Comment & mongoose.Document

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Bar' })
  bar: Bar

  @Prop()
  text: string

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date
}

export const CommentSchema = SchemaFactory.createForClass(Comment)

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/schemas/comment.schema'

export type BarDocument = Bar & mongoose.Document

@Schema()
export class Bar {
    @Prop()
    name: string

    @Prop()
    isPaperCigarette: boolean

    @Prop()
    isIQos: boolean

    @Prop()
    isVape: boolean

    @Prop()
    PrivateRoom: string // MEMO: 完全個室あり or 半個室あり or 個室なし

    @Prop()
    address: string

    @Prop()
    telephone: number

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
    comments: Comment[];
}

export const BarSchema = SchemaFactory.createForClass(Bar)
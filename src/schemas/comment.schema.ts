import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Comment & Document

@Schema()
export class Comment {
    @Prop()
    barId: Types.ObjectId

    @Prop()
    text: string

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date
}

export const CommentSchema = SchemaFactory.createForClass(Comment)
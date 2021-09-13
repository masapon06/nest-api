import { Types } from 'mongoose';

export class CreateCommentDto {
    barId: Types.ObjectId
    text: string
    createdAt: Date
    updatedAt: Date
}
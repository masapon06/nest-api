import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BarDocument = Bar & Document

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
}

export const BarSchema = SchemaFactory.createForClass(Bar)
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bar, BarSchema } from 'src/schemas/bar.schema';
import { BarsController } from './bars.controller';
import { BarsService } from './bars.service';

// TODO: app.modulesと結合できるならしたい
@Module({
  imports: [MongooseModule.forFeature([{ name: Bar.name, schema: BarSchema }])],
  controllers: [BarsController],
  providers: [BarsService],
})
export class BarsModule {}

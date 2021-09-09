import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarsController } from './bars/bars.controller';
import { BarsService } from './bars/bars.service';
import { Bar, BarSchema } from './schemas/bar.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cigarettes'), 
    MongooseModule.forFeature([{ name: Bar.name, schema: BarSchema }]),
  ],
  controllers: [AppController, BarsController],
  providers: [AppService, BarsService],
})
export class AppModule {}

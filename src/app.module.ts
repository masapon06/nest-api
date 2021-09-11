import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarsModule } from './bars/bars.modules';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cigarettes'), 
    BarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

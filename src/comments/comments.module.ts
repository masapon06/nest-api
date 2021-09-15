import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bar, BarSchema } from 'src/schemas/bar.schema';
import { Comment, CommentSchema } from 'src/schemas/comment.schema';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

// TODO: app.modulesと結合できるならしたい
@Module({
  imports: [MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]), MongooseModule.forFeature([{ name: Bar.name, schema: BarSchema }])],
  controllers: [CommentsController],
  providers: [CommentsService],
})

export class CommentsModule {}

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Bar, BarDocument } from 'src/schemas/bar.schema'
import { Comment, CommentDocument } from 'src/schemas/comment.schema'
import { CreateCommentDto } from '../dto/create-comment.dto'

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private commentModel: Model<CommentDocument>,

    @InjectModel(Bar.name)
    private barModel: Model<BarDocument>
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new this.commentModel({
      ...createCommentDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).save()
    return comment
  }

  async findByIdAndUpdate(comment): Promise<Bar> {
    const updatedComment = this.barModel.findByIdAndUpdate(
      comment.bar,
      { $push: { comments: comment._id } },
      { new: true, useFindAndModify: false }
    )
    return updatedComment
  }
}

import { Body, Controller, Post, ValidationPipe } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CreateCommentDto } from '../dto/create-comment.dto'

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  async create(@Body(ValidationPipe) createCommentDto: CreateCommentDto) {
    const createdComment = await this.commentsService.create(createCommentDto)
    await this.commentsService.findByIdAndUpdate(createdComment)
  }
}

import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CreateCommentDto } from './dto/create-comment.dto'

@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService) {}

    @Post()
    async create(@Body() createCommentDto: CreateCommentDto) {
        this.commentsService.create(createCommentDto)
    }
    
}
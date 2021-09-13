import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Comment, CommentDocument } from "src/schemas/comment.schema";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    async create(createCommentDto: CreateCommentDto): Promise<Comment>{
        const createdComment = new this.commentModel(createCommentDto)
        return createdComment.save()
    }
}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from 'src/cats/cats.module';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comments, CommentsSchema } from './comments.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comments.name, schema: CommentsSchema },
    ]),
    CatsModule,
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}

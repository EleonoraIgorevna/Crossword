import { Module } from '@nestjs/common';
import { CrosswordController } from './crossword.controller';
import { CrosswordService } from './crossword.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CrosswordModel, CrosswordModelSchema } from './model/crossword.model';


@Module({
  controllers: [
    CrosswordController
  ],
  providers: [
    CrosswordService
  ],
  imports: [
    MongooseModule.forFeature([{ name: CrosswordModel.name, schema: CrosswordModelSchema }])
  ],
  exports: [
    CrosswordService
  ]
})
export class CrosswordModule {}

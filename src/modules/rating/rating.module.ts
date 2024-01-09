import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ratings, RatingsSchema } from 'src/schemas/ratings';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Ratings.name, schema: RatingsSchema }
  ])],
  providers: [RatingService],
  controllers: [RatingController]
})
export class RatingModule {}

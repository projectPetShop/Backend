import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RatingsDocument = HydratedDocument<Ratings>;

@Schema({ timestamps: true})
export class Ratings {
  @Prop()
  id_user: number;

  @Prop()
  comment: string;

  @Prop()
  rate: number;
}

export const RatingsSchema = SchemaFactory.createForClass(Ratings);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoriesDocument = HydratedDocument<Categories>;

@Schema({ timestamps: true })
export class Categories {
  @Prop()
  name: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);

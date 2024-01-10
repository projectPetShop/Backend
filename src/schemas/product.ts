import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema({ timestamps: true })
export class Products {
  @Prop()
  id_categories: number;

  @Prop()
  id_rating: string;

  @Prop()
  name: string;

  @Prop()
  quantity: number;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  image: string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);

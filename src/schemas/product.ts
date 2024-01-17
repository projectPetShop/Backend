import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { DEFAULT_PRODUCT_IMAGE } from 'src/constants';

export type ProductsDocument = HydratedDocument<Products>;

@Schema({ timestamps: true })
export class Products {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: ObjectId;

  @Prop()
  name: string;

  @Prop()
  quantity: number;

  @Prop({ default: null })
  description: string;

  @Prop()
  price: number;

  @Prop({ default: DEFAULT_PRODUCT_IMAGE })
  image: string;

  @Prop({ required: false })
  rating: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);

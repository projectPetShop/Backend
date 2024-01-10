import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemsDocument = HydratedDocument<Items>;

@Schema({ timestamps: true })
export class Items {
  @Prop()
  id_order: number;

  @Prop()
  id_product: number;

  @Prop()
  id_service: number;

  @Prop()
  quantity: number;

  @Prop()
  note: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);

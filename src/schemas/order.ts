import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrdersDocument = HydratedDocument<Orders>;

@Schema({ timestamps: true })
export class Orders {
  @Prop()
  id_user: number;

  @Prop()
  total: number;

  @Prop({ default: new Date() })
  date: Date;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);

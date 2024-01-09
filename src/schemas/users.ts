import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema({ timestamps: true, collection: 'users' })
export class Users {
  @Prop()
  user_name: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  phone: number;

  @Prop()
  address: string;

  @Prop()
  role: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema({ timestamps: true, collection: 'users' })
export class Users {
  @Prop({required: true, unique: true})
  user_name: string;

  @Prop({required: true})
  password: string;

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  phone: number;

  @Prop({required: true})
  address: string;

  @Prop({default: '1'})
  role: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

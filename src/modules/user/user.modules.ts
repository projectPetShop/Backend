import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema, Users } from 'src/schemas/users';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Users.name, schema: UsersSchema }
  ])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

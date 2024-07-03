import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schemas/users';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private readonly userModel: Model<UsersDocument>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UsersDocument> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<UsersDocument[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string): Promise<UsersDocument> {
    return this.userModel.findById(id);
  }

  async findByUsername(username: string): Promise<UsersDocument> {
    return this.userModel.findOne({ username }).exec();
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UsersDocument> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }

  remove(id: number) {
    return this.userModel.deleteOne({ _id: id });
  }
}

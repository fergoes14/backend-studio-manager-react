import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUsersDto } from '../dto/create-users.dto';


@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async getAll() {
    return await this.userModel.find().populate('studio').exec();
  }

  async getById(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async getByEmail(email: string) {
    return await this.userModel.findOne({ email }).exec();
  }

  async create(createUsersDto: CreateUsersDto) {
    const createdUser = new this.userModel(createUsersDto);
    return await createdUser.save();
  }

  async update(id: string, user: User) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }

  async saveorupdateRefreshToke(
    refreshToken:string,
    id:string, 
    refreshtokenexpires){
    await this.userModel.updateOne({_id:id},{refreshtoken:refreshToken, refreshtokenexpires});
   }
}



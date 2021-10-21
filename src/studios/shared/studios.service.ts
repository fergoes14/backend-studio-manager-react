
import { Injectable } from '@nestjs/common';
import {Studio} from './studio'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudiosService {
    constructor(@InjectModel('Studios') private readonly studioModel: Model<Studio>){
    }
    async getAll(){
        return await this.studioModel.find().exec()
    }
    async getById(id : string){
        return await this.studioModel.findById(id).exec()
    }
    async create(studio:Studio){
        const createStudio = new this.studioModel(studio);
        return await createStudio.save()
    }
    async update(id: string, studio:Studio){
        await this.studioModel.updateOne({ _id: id }, studio).exec()
        return this.getById(id)
    }
    async delete(id:string){
        return await this.studioModel.deleteOne({_id:id}).exec()
    }
 }



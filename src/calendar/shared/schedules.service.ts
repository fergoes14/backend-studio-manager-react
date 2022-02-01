
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateSchedulesDto } from '../dto/create-schedule.dto';


@Injectable()
export class SchedulesService {
    constructor(@InjectModel('Schedules') private readonly scheduleModel: Model<CreateSchedulesDto>){

    }
    async getAll(studioId: string){
        return await this.scheduleModel.find({
            'studio': studioId
        }).exec()
    }

    async getById(id: string){
        return await this.scheduleModel.findById(id).exec();
    }

    async create(CreateSchedulesDto: any){
        const createdSchedule = new this.scheduleModel(CreateSchedulesDto);
        return await createdSchedule.save()
    }

    async update(id:string, UpdateSchedulesDto:any){
        await this.scheduleModel.updateOne({id}, UpdateSchedulesDto)
        return this.getById(id)
    }

    async delete(id: string) {
        return await this.scheduleModel.deleteOne({id}).exec()
    }

    
 }

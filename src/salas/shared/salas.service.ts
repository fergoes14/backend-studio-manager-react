import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSalasDto } from '../dto/create-salas.dto';


@Injectable()
export class SalasService {
    constructor(@InjectModel('Salas') private readonly salaModel: Model<CreateSalasDto>) {

    }
    async getAll(studioId: string) {
        return await this.salaModel.find({
            'studio':studioId
        }).exec()
    }

    async getById(id: string) {
        return await this.salaModel.findById(id).exec()
    }

    async create(CreateSalasDto: any) {
        const createSala = new this.salaModel(CreateSalasDto);
        return await createSala.save()
    }

    async update(id:string, UpdateSalasDto:any){
        await this.salaModel.updateOne({_id:id}, UpdateSalasDto)
        return this.getById(id)
    }

    async delete(id:string){
        return await this.salaModel.deleteOne({ _id: id}).exec()
    }

}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlanosDto } from '../dto/create-planos.dto';


@Injectable()
export class PlanosService {
    constructor(@InjectModel('Planos') private readonly planoModel: Model<CreatePlanosDto>) {

    }
    async getAll(studioId: string) {
        return await this.planoModel.find({
            'studio':studioId
        }).exec()
    }

    async getById(id: string) {
        return await this.planoModel.findById(id).exec()
    }

    async create(CreatePlanosDto: any) {
        const createSala = new this.planoModel(CreatePlanosDto);
        return await createSala.save()
    }

    async update(id:string, UpdateSalasDto:any){
        await this.planoModel.updateOne({_id:id}, UpdateSalasDto)
        return this.getById(id)
    }

    async delete(id:string){
        return await this.planoModel.deleteOne({ _id: id}).exec()
    }

}


import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMatriculasDto } from '../dto/create-matriculas.dto';


@Injectable()
export class MatriculasService {
    constructor(@InjectModel('Matriculas') private readonly matriculasModel: Model<CreateMatriculasDto>) {

    }
    async getAll(studioId: string) {
        return await this.matriculasModel.find({
            'studio':studioId
        }).exec()
    }

    async getById(id: string) {
        return await this.matriculasModel.findById(id).exec()
    }

    async create(CreateMatriculasDto: any) {
        const createSala = new this.matriculasModel(CreateMatriculasDto);
        return await createSala.save()
    }

    async update(id:string, UpdateMatriculasDto:any){
        await this.matriculasModel.updateOne({_id:id}, UpdateMatriculasDto)
        return this.getById(id)
    }

    async delete(id:string){
        return await this.matriculasModel.deleteOne({ _id: id}).exec()
    }

}


/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfissionalDto } from '../dto/create-profisional.dto';
import { ObjectId, } from "mongodb"


@Injectable()
export class ProfissionaisService {
    constructor(@InjectModel('Profissionais') private  readonly profissionalModel: Model<CreateProfissionalDto>){

    }
    async getAll(studioId: string){
        return await this.profissionalModel.find({
            'studio':studioId
        }).exec()
    }

    async getById(id: string){
        return await this.profissionalModel.findById(id).exec()
    }

    async create(CreateProfissionalDto:any){
        const createdProfissional = new this.profissionalModel(CreateProfissionalDto);
        return await createdProfissional.save()
    }

    async update(id: string, updateAlunosDto:any) {
        await this.profissionalModel.updateOne({ _id: id }, updateAlunosDto)
        return this.getById(id)
    }

    async delete(id: string) {
        return await this.profissionalModel.deleteOne({ _id: id }).exec()
    }

    async getSummary(studioId: string){
        const agg = this.profissionalModel.aggregate([{
            $match: {'studio': new ObjectId(studioId)}
        }, {
            $project: { ativos: { $sum: "$ativo" }, inativos: { $sum: "$inativo" } }
        }, {
            $group: { _id: null, ativos: { $sum: "$ativos" }, inativos: { $sum: "$inativos" } }
        }, {
            $project: { _id: 0, ativos: 1, inativos: 1 }
        }]).exec()
     return await agg
    }

    async getSearch(studioId:string, searchText:string){
        
        console.log(searchText)
        return await this.profissionalModel.aggregate([{
           $match: { name: new RegExp('.*'+searchText+'.*', 'i'),'studio': new ObjectId(studioId)}}]).exec()
            
    }

}

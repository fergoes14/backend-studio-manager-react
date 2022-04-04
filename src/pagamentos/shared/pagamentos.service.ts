/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePagamentosDto } from '../dto/create-pagamentos.dto';
import { ObjectId, } from "mongodb"


@Injectable()
export class PagamentosService {
    constructor(@InjectModel('Pagamentos') private  readonly pagamentosModel: Model<CreatePagamentosDto>){

    }
    async getAll(studioId: string){
        return await this.pagamentosModel.find({
            'studio':studioId
        }).exec()
    }

    async getById(id: string){
        return await this.pagamentosModel.findById(id).exec()
    }

    async create(CreatePagamentosDto:any){
        const createdProfissional = new this.pagamentosModel(CreatePagamentosDto);
        return await createdProfissional.save()
    }

    async update(id: string, updatePagamentos:any) {
        await this.pagamentosModel.updateOne({ _id: id }, updatePagamentos)
        return this.getById(id)
    }

    async delete(id: string) {
        return await this.pagamentosModel.deleteOne({ _id: id }).exec()
    }

    async getSummary(studioId: string){
        const agg = this.pagamentosModel.aggregate([{
            $match: {'studio': new ObjectId(studioId)}
        }, {
            $project: { creditos: { $sum: "$credito.value" }, debitos: { $sum: "$debito.value" } }
        }, {
            $group: { _id: null, creditos: { $sum: "$creditos" }, debitos: { $sum: "$debitos" } }
        }, {
            $project: { _id: 0, creditos: 1, debitos: 1 }
        }]).exec()
     return await agg
    }

    async getSearch(studioId:string, searchText:string){
        
        console.log(searchText)
        return await this.pagamentosModel.aggregate([{
           $match: { name: new RegExp('.*'+searchText+'.*', 'i'),'studio': new ObjectId(studioId)}}]).exec()
            
    }

}

import { Injectable } from '@nestjs/common';
import { Aluno } from './alunos';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId, } from "mongodb"
import { CreateAlunosDto } from '../dto/create-alunos.dto';



@Injectable()
export class AlunosService {
    constructor(@InjectModel('Alunos') private readonly alunoModel: Model<CreateAlunosDto>) {

    }

    async getAll(studioId: string) {
        return await this.alunoModel.find({
            'studio': studioId

        }).exec()

    }
    async getById(id: string) {
        return await this.alunoModel.findById(id).exec();
    }

    async create(createAlunoDto: any) {
        const createdAluno = new this.alunoModel(createAlunoDto);
        return await createdAluno.save()
    }

    async update(id: string, updateAlunosDto:any) {
        await this.alunoModel.updateOne({ _id: id }, updateAlunosDto)
        return this.getById(id)
    }

    async delete(id: string) {
        return await this.alunoModel.deleteOne({ _id: id }).exec()
    }

    async getsummary(studioId: string) {
        const agg = this.alunoModel.aggregate([{
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
        return await this.alunoModel.aggregate([{
           $match: { nome: new RegExp('.*'+searchText+'.*', 'i'),'studio': new ObjectId(studioId)}}]).exec()
            
    }
}



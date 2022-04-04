import * as mongoose from 'mongoose'

export const MatriculasSchema = new mongoose.Schema({
    aluno:String,
    plano:String,
    planoId:String,
    sala:String,
    profissionalId:String,
    salaId:String,
    profissional:String,
    inicioPlano:String,
    fimPlano:String,
    studio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'studios',
        required:true,
        
    }
})
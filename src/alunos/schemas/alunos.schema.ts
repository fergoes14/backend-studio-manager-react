import * as mongoose from 'mongoose'
// TESTE


export const AlunoSchemas = new mongoose.Schema({
    nome: { type: String, required: true },

    nascimento: { type: String, required: true },
    intuito: String,
    restricoes: String,
    cel: String,
    email: String,
    status: String,
    cep: { type: String, },
    bairro: { type: String, },
    rua: { type: String, },
    numero: { type: String, },
    ativo:Number,
    inativo:Number,
    complemento:String,
    sexo:String,
    cpf:String,
    studio:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Studios',
        required:true
    }



})


import * as mongoose from 'mongoose'

export const ProfissionaisSchema = new mongoose.Schema({
    name: String,
    id: String,
    bgColor: String,
    borderColor: String,
    show:{
        type: Boolean,
        default:true
    },
    color: {
        type: String,
        default: 'white'
    },
    dragBgColor:{
        type:String,
        default:'#011e3c'
    },
    nascimento: String,
    telefone: String,
    celular: String,
    email: String,
    status: String,
    bairro: String,
    cep: String,
    rua: String,
    complemnto: String,
    numero: String,
    ativo: Number,
    inativo: Number,
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studios',
        required: true,
        default: '614e013ae9cb5ba9c74e51d6'
    }
})
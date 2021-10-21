import * as mongoose from 'mongoose'

const sociosSchema = new mongoose.Schema({
    nome:String,
    email:String,
})

export const studiosSchema = new mongoose.Schema({
    nomeStudio:String,
    socios:[sociosSchema],
})
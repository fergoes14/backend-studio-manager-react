import * as mongoose from 'mongoose'

export const SalaSchema = new mongoose.Schema({
    title:{
        type:String,
        default:'Salas'
    },
    id:String,
    borderColor:{
        type:String,
        default:'#FF2E00'
    },
    name:String,
    studio:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Studios',
        required:true
    }
})
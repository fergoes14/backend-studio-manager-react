import * as mongoose from 'mongoose'

export const PlanoSchema = new mongoose.Schema({
    name:String,
    vezesSemana:Number,
    duracao:Number,
    valor:Number,
    studio:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'studios',
        required:true,
        
    }
})
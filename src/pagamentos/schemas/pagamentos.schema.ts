import * as mongoose from 'mongoose'

  const creditSchema = new mongoose.Schema({
      name:{
          type:String,
         required:true,
      },
      value:{
          type:Number,
          required:true
      },
      status:{
        type:String,
       required:true,
    },
  })
  const debitSchema = new mongoose.Schema({
      name:{
          type:String,
          required:true,
      },
      value:{
          type:Number,
          required:true
      },
      status:{
        type:String,
       required:true,
    },
  })

export const PagamentosSchema = new mongoose.Schema({
    name: String,
    
    description:String,
    credito: [creditSchema],
    debito: [debitSchema],
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studios',
        required: true,
       
    }
})
import * as mongoose from 'mongoose'


export const userSchemas = new mongoose.Schema({
    
    name: String,
    email: String,
    password: String,
    refreshtoken: String,
    refreshtokenexpires: String,
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studios',
        required: true,
        default: '614e013ae9cb5ba9c74e51d6'
    }

})

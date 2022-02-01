import * as mongoose from 'mongoose'

export const photoSchema = new mongoose.Schema({
    photo: {
        required:true,
        type:String,
        default:"https://studio-manager-img.s3.amazonaws.com/1636476706927%20-%20icons8-person-64.png"
    }
})

export const userSchemas = new mongoose.Schema({
    
    name: String,
    email: String,
    password: String,
    refreshtoken: String,
    refreshtokenexpires: String,
    photos: {
        type:String,
        default:"https://studio-manager-img.s3.amazonaws.com/1636476706927%20-%20icons8-person-64.png"
    },
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studios',
        required: true,
        default: '614e013ae9cb5ba9c74e51d6'
    }

})

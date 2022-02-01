import * as mongoose from 'mongoose'

export const photoSchema = new mongoose.Schema({
    photo: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        default: '618bcfda94a6b9051d214655'
    }
})
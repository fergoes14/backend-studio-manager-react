import { Document } from 'mongoose'

export class User extends Document {
    name: String;
    email: String;
    password: String;
    studio: String;
    refreshtoken: string;
    refreshtokenexpires: string;
    photos:string;

}
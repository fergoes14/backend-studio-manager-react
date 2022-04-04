import { Document } from "mongoose";

export class Sala extends Document {
    title:string;
    id:string;
    borderColor:string;
    name:String;
    studio:String;
}
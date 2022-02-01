import { Document } from "mongoose";

export class Photos extends Document {

    photo:String;
    user: String;
}
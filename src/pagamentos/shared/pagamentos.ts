import { Document } from "mongoose";

export class Pagamentos extends Document {
    name: String;
    
    description:String;
    credito: any;
    debito: any;
    studio: String;
}
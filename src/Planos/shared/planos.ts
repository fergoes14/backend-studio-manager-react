import { Document } from "mongoose";

export class Plano extends Document{
    name:string;
    vezesSemana:number;
    duracao:number;
    valor:number;
    studio:string;
}
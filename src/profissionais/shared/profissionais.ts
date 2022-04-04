import { Document } from "mongoose";

export class Profissionais extends Document {
    title:String;
    name: String;
    id: String;
    bgColor: String;
    borderColor: String;
    color:String;
    show:Boolean;
    dragBgColor:String;
    nascimento:String;
    telefone:String;
    celular:String;
    email:String;
    status:String;
    bairro: String;
    cep:String;
    rua:String;
    complemnto:String;
    numero:String;
    ativo:Number;
    inativo:Number;
    studio:String;
}
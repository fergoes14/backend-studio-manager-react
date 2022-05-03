
import { Document } from "mongoose";




export class Aluno extends Document {
    
    nome: String;
    nascimento: String;
    intuito: String;
    restricoes: String;
    cel: String;
    email: String;
    status: String;
    cep:String;
    bairro:String;
    rua:String ;
    numero:String;
    ativo:Number;
    inativo:Number;
    complemento:string;
    sexo:string;
    cpf:string;
    studio:string ;
}

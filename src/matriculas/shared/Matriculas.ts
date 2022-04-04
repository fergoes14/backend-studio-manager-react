import { Document } from "mongoose";

export class Matricula extends Document{
    aluno:string;
    plano:string;
    planoId:string;
    sala:string;
    profissionalId:string;
    salaId:string;
    profissional:string;
    inicioPlano:string;
    fimPlano:string;
    studio:string;
}
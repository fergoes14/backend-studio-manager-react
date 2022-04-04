import { IsNotEmpty } from "class-validator";
export class CreateMatriculasDto{
    @IsNotEmpty({message: 'O campo "Aluno" não pode estar vazio'})
    aluno:string;
    @IsNotEmpty({message: 'O campo "Plano" não pode estar vazio'})
    plano:string;
    @IsNotEmpty({message: 'O campo "Profissional" não pode estar vazio'})
    profissional:string;
    planoId:string;
    sala:string;
    profissionalId:string;
    salaId:string;
    inicioPlano:string;
    fimPlano:string;
    studio:string;
}
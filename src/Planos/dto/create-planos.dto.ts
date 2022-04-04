import { IsNotEmpty } from "class-validator";
export class CreatePlanosDto{
    @IsNotEmpty({message: 'O campo "Nome" não pode estar vazio'})
    name:string;
    @IsNotEmpty({message: 'O campo "Vezes na semana" não pode estar vazio'})
    vezesSemana:number;
    @IsNotEmpty({message: 'O campo "Duração do plano" não pode estar vazio'})
    duracao:number;
    @IsNotEmpty({message: 'O campo "Valor" não pode estar vazio'})
    valor:number;
    studio:string;
}
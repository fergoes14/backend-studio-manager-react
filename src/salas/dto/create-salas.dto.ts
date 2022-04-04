import { IsNotEmpty } from "class-validator";

export class CreateSalasDto {
    title:string;
    id: string;
    borderColor: string;
    @IsNotEmpty({ message: 'O campo "NOME" não pode estar vazio' })
    name: string;
    studio: string;
}
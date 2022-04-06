

import { IsString, IsNotEmpty, IsNumber, } from "class-validator";

export class CreateAlunosDto {
    @IsNotEmpty({ message: 'Campo Nome não pode estar vazio' })
    nome: String;

    @IsString({ message: 'Campo Nascimento não pode estar vazio' })
    nascimento: String;

    intuito: String;

    restricoes: String;

    @IsString({ message: 'Campo Telefone não pode estar vazio' })
    cel: String;

    email: String;

    @IsNotEmpty({ message: 'Campo Status não pode estar vazio' })
    status: String;

    cep: String;
    @IsString({ message: 'Campo Bairro não pode estar vazio' })
    bairro: String;

    @IsString({ message: 'Campo Rua não pode estar vazio' })
    rua: String;

    @IsNotEmpty({ message: 'Campo Número não pode estar vazio' })
    numero: String;

    ativo: Number;
    
    inativo: Number;
    complemento: string;
    @IsNotEmpty({ message: 'Complete corretamento o campo sexo' })
    sexo:string;
    studio: string;
}

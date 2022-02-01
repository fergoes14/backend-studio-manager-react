


import { IsNotEmpty, IsEmail, MinLength, ArrayUnique } from "class-validator";


export class CreateUsersDto {

    @IsNotEmpty({ message: 'Nome não pode estar vazio.' })
    name: String;

    @IsNotEmpty({ message: 'OPS, parece que esqueceu de informar um E-mail' })
    
    
    email: String;

    @IsNotEmpty({ message: 'OPS, você esqueceu de informar uma senha' })
    @MinLength(6, {
        message: 'Sua senha deve ter no mínimo 6 caracteres Dica: misture Números e letras maiusculas e minúsculas'
    })
    password: String;

    studio: String;

    refreshtoken:string;
 
   
    refreshtokenexpires:string;
    photos:string
}

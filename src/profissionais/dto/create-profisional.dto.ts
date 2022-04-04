import { IsNotEmpty } from "class-validator";



export class CreateProfissionalDto {
    title:String;
    @IsNotEmpty({ message: 'Preencha corretamente o campo Nome' })
    name: String;
    
    id: String;
    bgColor: String;
    borderColor: String;
    color:String;
    show:Boolean;
    dragBgColor:String;
    @IsNotEmpty({ message: 'Preencha corretamente o campo Nascimento' })
    nascimento: String;

    telefone: String;

    celular: String;
   
    email: String;
    @IsNotEmpty({ message: 'Preencha corretamente o campo Status' })
    status: String;

    bairro: String;
 
    cep: String;
 
    rua: String;
 
    complemnto: String;
 
    numero: String

    ativo: Number;
    inativo: Number;
    studio: string;

}
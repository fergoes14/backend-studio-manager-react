import { IsNotEmpty } from "class-validator";



export class CreatePagamentosDto {
    
    @IsNotEmpty({ message: 'Preencha corretamente o campo Nome' })
    name: String;
    
    description:String;
    credito: any;
    debito: any;
    studio: string;

}
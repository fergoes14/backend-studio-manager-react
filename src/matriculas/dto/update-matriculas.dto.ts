import { PartialType } from "@nestjs/mapped-types";
import { CreateMatriculasDto } from "./create-matriculas.dto";


export class UpdateMatriculasDto extends PartialType(CreateMatriculasDto){}
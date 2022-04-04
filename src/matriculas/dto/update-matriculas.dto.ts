import { PartialType } from "@nestjs/mapped-types";
import { CreateMatriculasDto } from "./create-Matriculas.dto";

export class updateMatriculasDto extends PartialType(CreateMatriculasDto) {}

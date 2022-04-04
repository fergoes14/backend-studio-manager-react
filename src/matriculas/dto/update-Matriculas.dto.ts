import { PartialType } from "@nestjs/mapped-types";
import { CreateMatriculasDto } from "./create-Matriculas.dto";

export class UpdateMatriculasDto extends PartialType(CreateMatriculasDto) {}

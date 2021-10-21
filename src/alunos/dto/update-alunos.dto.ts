import { PartialType } from "@nestjs/mapped-types";
import { CreateAlunosDto } from "./create-alunos.dto";

export class UpdateAlunosDto extends PartialType(CreateAlunosDto) {}

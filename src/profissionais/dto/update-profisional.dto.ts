import { PartialType } from "@nestjs/mapped-types";
import { CreateProfissionalDto } from "./create-profisional.dto";

export class UpdateProfissionais extends PartialType(CreateProfissionalDto) {}
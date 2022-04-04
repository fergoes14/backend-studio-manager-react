import { PartialType } from "@nestjs/mapped-types";

import { CreateSalasDto } from "./create-salas.dto";

export class UpdateSalasDto extends PartialType(CreateSalasDto) {}
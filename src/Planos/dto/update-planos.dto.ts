import { PartialType } from "@nestjs/mapped-types";
import { CreatePlanosDto } from "./create-planos.dto";


export class UpdatePlanosDto extends PartialType(CreatePlanosDto){}
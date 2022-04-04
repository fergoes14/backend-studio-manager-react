import { PartialType } from "@nestjs/mapped-types";
import { CreatePagamentosDto } from "./create-pagamentos.dto";

export class UpdatePagamentos extends PartialType(CreatePagamentosDto) {}
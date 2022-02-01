import { PartialType } from "@nestjs/mapped-types";
import { CreatePhotoDto } from "./create-photos.dto";

export class UpdatePhotoDto extends PartialType(CreatePhotoDto) {}
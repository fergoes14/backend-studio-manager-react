import {PartialType} from "@nestjs/mapped-types";
import { CreateSchedulesDto } from "./create-schedule.dto";

export class UpdateSchedulesDto extends PartialType(CreateSchedulesDto){}
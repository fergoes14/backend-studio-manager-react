import { Document} from "mongoose";

export class Studio extends Document{
    nomeStudio:String;
    socios:[];
}
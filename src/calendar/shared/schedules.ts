import {Document} from 'mongoose';

export class Schedule extends Document {
    id: String;
    calendarId: String;
    title: String;
    category: String;
    dueDateClass: String;
    bgColor: String;
    borderColor: String;
    color: String;
    dragBgColor: String;
    start: Date;
    end: Date;
    raw: String;
    isAllDay: Boolean;
    location: String;
    state: String;
    sala:string;
    studio:String;
   isVisible:Boolean;
}
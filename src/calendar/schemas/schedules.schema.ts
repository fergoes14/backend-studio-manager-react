import * as mongoose from 'mongoose'

export const ScheduleSchema = new mongoose.Schema({
    id: String,
    calendarId: String,
    title: String,
    category: String,
    dueDateClass: String,
    bgColor: String,
    borderColor: String,
    color: String,
    dragBgColor: String,
    start: Date,
    end: Date,
    raw: Object,
    isAllDay: Boolean,
    location: String,
    state: String,
    studio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studios',
        required: true,
        default: '614e013ae9cb5ba9c74e51d6'
    },
    isVisible: Boolean,
})
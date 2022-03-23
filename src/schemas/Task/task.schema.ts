import { Schema } from 'mongoose'




export const TaskSchema = new Schema({
    title: {type : String , required: true},
    description: {type : String , required: true},
    dueOn:{ type: Date, default : Date.now },
    status: {type : String , required: true},
})
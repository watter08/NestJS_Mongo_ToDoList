import { Schema } from 'mongoose';





export const StatuSchema = new Schema({
    description: { type: String , required : true},
    type:{type : String , required: true},
    dueOn: { type : Date , default : Date.now},
    state : { type: String , required : true}
})
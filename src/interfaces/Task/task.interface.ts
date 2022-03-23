import { Document } from 'mongoose'

export interface TaskInterface extends Document {
    readonly title: string;
    readonly description: string;
    readonly dueOn: Date;
    readonly status : string;
}
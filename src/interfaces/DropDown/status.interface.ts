import { Document } from 'mongoose'

export class StatusInterface extends Document {
    readonly description: string;
    readonly type: string;
    readonly dueOn: Date;
    readonly state : string;
}
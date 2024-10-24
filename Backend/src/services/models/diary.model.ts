import mongoose, {Model, Document, ObjectId} from 'mongoose';
import diarySchema from '../schemas/diary.schema';

export interface IDiary extends Document{
    title:string;
    date:Date;
    description:string;
    user:ObjectId;
};

export const Diary: Model<IDiary> = mongoose.model<IDiary>('Diary', diarySchema);
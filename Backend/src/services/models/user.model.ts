import mongoose, {Model, Document} from 'mongoose';
import userSchema from '../schemas/user.schema';

export interface IUser extends Document{
    name:string;
    surname:string;
    username:string;
    password:string;
    email:string;
};

export const Users: Model<IUser> = mongoose.model<IUser>('Users', userSchema);
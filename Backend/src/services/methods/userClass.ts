import { generateToken } from "../../middelwares/generateToke";
import { IUser, Users } from "../models/user.model";
import bcrypt from 'bcrypt';

export class User{
    static async register(data: IUser): Promise<IUser> {
        const existingUser = await Users.findOne({ $or: [{ username: data.username }, { email: data.email }] });
        console.log(existingUser)
        if (existingUser) {
            throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        const addUser = new Users(data);
        await addUser.save();
        return addUser;
    }
    
    static async login(data: { username: string; email: string; password: string }): Promise<string> {
        const user = await Users.findOne({ $or: [{ username: data.username }, { email: data.email }] });
        if (!user) {
            throw new Error('User not found');
        }
    
        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) {
            throw new Error('Incorrect password');
        }
        const userId = user._id;
        const username = user.username;
        const email = user.email;
        
        const token = generateToken({ userId, username, email });
        return token;
    }
    
    static async deleteUser(id:string):Promise<IUser | null>{
            return Users.findByIdAndDelete(id);
    }
    static async updateUser(id: string, data: IUser): Promise<IUser | null> {
        return Users.findByIdAndUpdate(id, data, { new: true });
    }
    
}
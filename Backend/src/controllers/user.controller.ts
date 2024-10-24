import { User } from "../services/methods/userClass";
import {Request, Response} from 'express';

const register = async (req:Request, res:Response):Promise<void>=>{
    try {
        const user = await User.register(req.body);
        if(!user) {
            res.status(400).json({message:'User already exists'});
            return;
        }
        res.status(201).json({message:'User created: '+user});
    } catch (error) {
        res.status(500).json({message:'Error in the server: '+error});
    }
}
const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = await User.login(req.body);
        if (!token) {
            res.status(401).json('User or password incorrect');
            return;
        }
        
        res.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict', 
            maxAge: 3600000 // 
        });
        
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error in the server: ' + error });
    }
};

const deleteUser = async (_req:Request, res:Response):Promise<void>=>{
    try {
        const user = await User.deleteUser(res.locals.user.userId);
        if(!user) {
            res.status(404).json({message:'Error deleting user'});
            return;
        }
        res.status(200).json({message:'User deleted: '+user});
    } catch (error) {
        res.status(500).json({message:'Error in the server: '+error});
    }
}
const updateUser = async(req:Request, res:Response):Promise<void>=>{
    try {
        const user = await User.updateUser(res.locals.user.userId,req.body);
        if(!user) {
            res.status(400).json({message:'Invalid id or data'});
            return;
        }
        res.status(200).json('User modified: '+user);
    } catch (error) {
        res.status(500).json({message:'Error updating user: '+error});
    }
}

export {
    register,
    login,
    updateUser,
    deleteUser
}
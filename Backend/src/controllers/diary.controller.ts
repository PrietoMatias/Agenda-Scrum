import { DiaryClass } from "../services/methods/diaryClass";
import {Request, Response} from 'express';

const addDiary = async (req:Request, res:Response):Promise<void>=>{
    try {
        req.body.user = res.locals.user.userId;
        const diary = await DiaryClass.write(req.body);
        if(!diary) {
            res.status(400).json({message:'Invalid entry'});
            return;
        }
        res.status(201).json({diary});
    } catch (error) {
        res.status(500).json({message:'Error creating diary: '+error});
    }
}
const getAlldiaries = async(_req:Request, res:Response):Promise<void>=>{
    try {
        const user = await DiaryClass.getAlldiaries(res.locals.user.userId);
        if(!user.length) {
            res.status(200).json({message:'Nothing here... add diaries'});
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:'Error in the server: '+error});
    }
}
const updateDiary = async(req:Request, res:Response):Promise<void>=>{
    try {
        const diary = await DiaryClass.updateDiary(req.params.id,req.body);
        if(!diary) {
            res.status(404).json({message:'Invalid entry'});
            return;
        }
        res.status(200).json({diary});
    } catch (error) {
        res.status(500).json({message:'Error in the server: '+error});
    }
}
const deleteDiary = async (req:Request, res:Response):Promise<void>=>{
    try {
        const diary = await DiaryClass.deleteDiary(req.params.id);
        if(!diary) {
            res.status(404).json({message:'Error deleting diary'});
            return;
        }
        res.status(200).json({diary});
    } catch (error) {
        res.status(500).json({message:'Error deleting diary: '+error});
    }
}

export {
    addDiary,
    getAlldiaries,
    deleteDiary,
    updateDiary,
}

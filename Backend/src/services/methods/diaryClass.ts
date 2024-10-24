import { IDiary, Diary } from "../models/diary.model";

export class DiaryClass {
    static async write(data:IDiary):Promise<IDiary>{
        const diary = new Diary(data);
        return diary.save();
    }
    static async updateDiary(id: string, data: IDiary): Promise<IDiary | null> {
        return Diary.findByIdAndUpdate(id, data, { new: true });
    }
    static async deleteDiary(id:string):Promise<IDiary | null>{
        return Diary.findByIdAndDelete(id);
    }
    static async getAlldiaries(id:string):Promise<IDiary[]>{
       return Diary.find({user:id});
    }

}
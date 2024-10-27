import api from "../api";
import { IDiary } from "../../interfaces/Diary";

export const addDiary = async(data:IDiary):Promise<IDiary>=>{
    try {
        const response = await api.post('/diary/add', data);
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}
export const getDairies = async():Promise<IDiary[]>=>{
    try {
        const response = await api.get('/diary/diaries');
        return response.data 
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}
export const updateDiary = async(id:string,data:IDiary):Promise<IDiary>=>{
    try {
        const response = await api.put(`/diary/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}
export const deleteDiary = async(id:string):Promise<IDiary>=>{
    try {
        const response = await api.delete(`/diary/delete/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}
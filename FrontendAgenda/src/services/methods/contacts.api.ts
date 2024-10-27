import api from "../api";
import { IContact } from "../../interfaces/Contacts";


export const getAllContacts = async():Promise<IContact[]>=>{
    try {
        const response = await api.get('/contact/get');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}

export const addContact = async(data:IContact):Promise<IContact>=>{
    try {
        const response = await api.post('/contact/add', data);
        return response.data;
    } catch (error) {
        console.log('Error: '+ error);
        throw Error('Error: ' + error);
    }
}
export const updateContact = async(id:string, data:IContact):Promise<IContact>=>{
    try {
        const response = await api.put(`/contact/update/${id}`, data);
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}
export const deleteContact = async(id:string):Promise<IContact>=>{
    try {
        const response = await api.delete(`/contact/delete/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}
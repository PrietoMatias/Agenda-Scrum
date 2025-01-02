import api from "../api";
import { ILogin, IUser } from "../../interfaces/User";


export const register = async (data:IUser):Promise<IUser>=>{
    try {
        const response = await api.post('/user/register', data)
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
};

export const login = async (data: ILogin): Promise<void> => {
    try {
        const response = await api.post('/user/login', data);

        console.log('Respuesta completa del login:', response.data);

        if (response.data?.message === 'Login successful') {
            console.log('Login exitoso, cookie seteada por el backend');
            return;
        }
    } catch (error) {
        console.error('Error en login:', error); 
        throw new Error('Error de inicio de sesión'); 
    }
};



export const updateUser = async (data:IUser):Promise<IUser>=>{
    try {
        const response = await api.put('/user/update', data);
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' +error);
    }
}

export const deleteUser = async():Promise<IUser>=>{
    try {
        const response = await api.delete('/user/delete');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}

export const getUserInfo = async():Promise<IUser>=>{
    try {
        const response = await api.get('/user/info');
        return response.data;
    } catch (error) {
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
    }
}


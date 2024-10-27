import axios from "axios";
import { getToken } from "./methods/user.api";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    headers:{
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(
    (config)=>{
        const token = getToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        Promise.reject(error);
    }
);
api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            console.log('Error 401: No autorizado');
            break;
          case 404:
            console.log('Error 404: No encontrado');
            break;
          case 403:
            console.log('Error 403: Prohibido');
            break;
          case 500:
            console.log('Error 500: Error interno del servidor');
            break;
          default:
            console.log(`Error ${error.response.status}: ${error.message}`);
        }
      } else if (error.request) {
        console.log('No se recibió respuesta del servidor:', error.request);
      } else {
        console.log('Error al configurar la solicitud:', error.message);
      }
      return Promise.reject(error);
    }
  )
export default api;
import api from '../api';

const check = async ()=>{
    try{
    const response = await api.get('/checkauth');
    return response
    }catch(error){
        console.log('Error: ' + error);
        throw Error('Error: ' + error);
        }
}

export default check;
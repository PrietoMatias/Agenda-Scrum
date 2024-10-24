import jwt from 'jsonwebtoken';
import { ITokenPlayLoad } from './TokenPlayload';

const secret = "MiloPrietoMatias";

export const generateToken = (playload:ITokenPlayLoad)=>{
    return jwt.sign(playload, secret, {expiresIn: '1h'});
}

export const verifyToken = (token:string):ITokenPlayLoad=>{
    return jwt.verify(token, secret) as ITokenPlayLoad;      
}
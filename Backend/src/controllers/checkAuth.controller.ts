import { Request, Response } from "express"
const checkAuth = (_req:Request, res:Response)=>{
    try {
        res.setHeader('cache-control', 'no-cache, no-store, must-revalidate');
        res.status(200).json({message: "Authenticated"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
}

export default checkAuth;
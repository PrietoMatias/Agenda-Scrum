import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './generateToke';

const auth = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies.token;
    console.log("Token received: " + token);
    if (!token) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    try {
        const decoded = verifyToken(token) as { userId: string | unknown, username: string, email: string };
        console.log('token decoded: ', decoded); 
        res.locals.user = decoded;
        next();
    } catch (error) {
        console.log('Error in the auth: ' + error);
        res.status(500).json({ message: 'Invalid Token' + error });
    }
}

export default auth;

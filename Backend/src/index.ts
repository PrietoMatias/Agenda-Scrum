import express from 'express';
import connection from './services/database';
import routerUser from './routes/user.route';
import routerDiary from './routes/diary.route';
import routerContact from './routes/contact.route';
import routerAuthentication from './routes/authentication.route';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';


const app = express();

const startServer = async ():Promise<void>=>{
    await connection();
    
    app.use(cors({
        origin: 'http://localhost:5173', // Dominio de tu frontend
        credentials: true, // Permitir envío de cookies o credenciales
    }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', routerUser);
    app.use('/api', routerDiary);
    app.use('/api', routerContact);
    app.use('/api', routerAuthentication);
    app.use(morgan('dev'));

    app.listen(3000, ()=>{
        console.log('Server on port: http:localhost:3000');
    });
}

startServer();

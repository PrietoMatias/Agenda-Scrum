import {register, login, updateUser, deleteUser, getUserInfo} from '../controllers/user.controller';
import { Router } from 'express';
import auth from '../middelwares/auth';

const router = Router();

router.post('/user/register', register);
router.get('/user/info', getUserInfo);
router.post('/user/login', login);
router.put('/user/update', auth, updateUser);
router.delete('/user/delete', auth, deleteUser);

export default router;
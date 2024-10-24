import {register, login, updateUser, deleteUser} from '../controllers/user.controller';
import { Router } from 'express';
import auth from '../middelwares/auth';

const router = Router();

router.post('/user/register', register);
router.post('/user/login', login);
router.put('/user/update', auth, updateUser);
router.delete('/user/delete', auth, deleteUser);

export default router;
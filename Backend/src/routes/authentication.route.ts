import { Router } from "express";
import checkAuth  from "../controllers/checkAuth.controller"

const router = Router();

router.get('/checkauth', checkAuth);


export default router;
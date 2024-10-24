import { getAlldiaries,deleteDiary,updateDiary, addDiary  } from "../controllers/diary.controller";
import auth from "../middelwares/auth";
import { Router } from "express";

const router = Router();

router.get('/diary/diaries', auth, getAlldiaries);
router.post('/diary/add', auth, addDiary);
router.put('/diary/update/:id', auth, updateDiary);
router.delete('/diary/delete/:id', auth, deleteDiary);

export default router;
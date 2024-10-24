import { addContact, updateContact, deleteContacts, getAllContacts } from "../controllers/contact.controller";
import auth from "../middelwares/auth";
import { Router } from "express";

const router = Router();

router.get('/contact/get', auth, getAllContacts);
router.post('/contact/add', auth, addContact);
router.put('/contact/update/:id', auth, updateContact);
router.delete('/contact/delete/:id', auth, deleteContacts);

export default router;
import {Request, Response} from 'express';
import { ContactService } from '../services/methods/conctactClass';

const addContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        req.body.user = res.locals.user.userId;
        const contact = await ContactService.addContact(data);
        if (!contact) {
            res.status(400).json({ message: 'Error adding contact' });
            return;
        }
        res.status(201).json({ contact });
    } catch (error) {
        res.status(500).json({ message: 'Error adding contact'+ error });
    }
};

const updateContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const data = req.body;
        const contact = await ContactService.updateContact(id, data);
        if (!contact) {
            res.status(400).json({ message: 'Error updating contact' });
            return;
        }
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact' + error});
    }
};

const deleteContacts = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const contact = await ContactService.deleteContact(id);
        if (!contact) {
            res.status(404).json({ message: 'Error deleting contact' });
            return;
        }
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact: ' + error });
    }
};

const getAllContacts = async (_req: Request, res: Response): Promise<void> => {
    try {
        const id = res.locals.user.userId;
        const contacts = await ContactService.getContacts(id);
        if (!contacts || contacts.length === 0) {
            res.status(200).json({ message: 'Nothing here... add contacts' });
            return;
        }
        res.status(200).json({ contacts });
    } catch (error) {
        res.status(500).json({ message: 'Error getting contacts'+ error});
    }
};
export {
    addContact,
    updateContact,
    deleteContacts,
    getAllContacts
}
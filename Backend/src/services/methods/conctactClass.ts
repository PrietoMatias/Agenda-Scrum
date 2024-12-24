import { IContact, Contact } from "../models/contact.model";

export class ContactService{
    static async addContact(contacts:IContact):Promise<IContact>{
        const newContact = new Contact(contacts);
        await newContact.save();
        return newContact;
    }
    static async getContacts(id: string): Promise<IContact[]> {
        const contacts = await Contact.find({user:id});
        return contacts;
    }
    
    static updateContact(id: string, contact: IContact): Promise<IContact | null>{
        return Contact.findByIdAndUpdate(id, contact, {new:true});
    }
    /**
     * Deletes a contact by its ID.
     *
     * @param {string} id - The ID of the contact to delete.
     * @returns {Promise<IContact | null>} A promise that resolves to the deleted contact if found, or null if not found.
     */
    static deleteContact(id:string):Promise<IContact | null>{
        return Contact.findByIdAndDelete(id);
    }
}
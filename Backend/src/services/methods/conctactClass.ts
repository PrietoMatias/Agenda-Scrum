import { IContact, Contact } from "../models/contact.model";

export class Contacts{
    static async addContacts(contacts:IContact):Promise<IContact>{
        const contact = new Contact(contacts);
        await contact.save();
        return contact;
    }
    static async getAllContacts(id: string): Promise<IContact[]> {
        const contacts = await Contact.find({user:id});
        return contacts;
    }
    
    static updateContacts(id:string,contacts:IContact):Promise<IContact | null>{
        return Contact.findByIdAndUpdate(id, contacts, {new:true});
    }
    static deleteContacts(id:string):Promise<IContact | null>{
        return Contact.findByIdAndDelete(id);
    }
}
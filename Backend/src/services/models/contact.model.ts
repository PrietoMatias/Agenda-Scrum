import mongoose, {Model, Document, ObjectId} from 'mongoose';
import contactSchema from '../schemas/contact.schema';

export interface IContactInfo extends Document{
    numberPhone:string;
    email:string;
    location:string;
    socialMedia:string;
}


export interface IContact extends Document{
    contactName:string;
    contactSurname:string;
    contacts: IContactInfo[];
    user:ObjectId;
};

export const Contact: Model<IContact> = mongoose.model<IContact>('Contacts', contactSchema );
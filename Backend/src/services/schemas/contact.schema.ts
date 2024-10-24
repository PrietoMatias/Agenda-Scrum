import {Schema} from 'mongoose';

const contactInfoSchema = new Schema({
    numberPhone: { type: String },  
    email: { type: String, match: /.+\@.+\..+/ },  
    location: { type: String },
    socialMedia: { type: String }
});

const contactSchema = new Schema({
    contactName: { type: String, required: true },
    contactSurname: { type: String },
    contacts: [contactInfoSchema], 
    user: {type: Schema.Types.ObjectId, ref:'Users', required:true}
});

export default contactSchema;
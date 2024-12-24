export interface IContactInfo{
    numberPhone:string;
    email:string;
    location:string;
    socialMedia:string;
}


export interface IContact{
    _id:string;
    contactName:string;
    contactSurname:string;
    contacts: IContactInfo[];
};

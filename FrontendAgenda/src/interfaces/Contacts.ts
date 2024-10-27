export interface IContactInfo{
    numberPhone:string;
    email:string;
    location:string;
    socialMedia:string;
}


export interface IContact{
    contactName:string;
    contactSurname:string;
    contacts: IContactInfo[];
};

// export interface Phone {
//     number: string
// }

// export interface Contact {
//     id: string,
//     first_name: string,
//     last_name : string,
//     created_at: Date,
//     phones: Phone[]

// }

import { Contact } from "../GraphQL/generated/graphql";


export type ContactsContextType ={
    contacts: Contact[],
    addContact: (contact: Contact) => void
    removeContact: (id: number)=> void
    createContacts: (data: Contact[]) => void
}


export type favoriteContactsContextType ={
    favouriteContacts: Contact[],
    addFavourite: (contact: Contact) => void
    removeFavourite: (id: number)=> void
    
}
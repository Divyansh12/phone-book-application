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
    updateContact: (contact: Contact) => void
    createContacts: (data: Contact[]) => void
}

export type regularContactsContextType ={
    regularContacts: Contact[],
    addRegularContact: (contact: Contact) => void
    removeRegularContact: (id: number)=> void
    createRegularContacts: (data: Contact[]) => void
}


export type favoriteContactsContextType ={
    favouriteContacts: Contact[]
    deleteFavourite: (id: number)=> void
    createFavouriteContacts: (data: Contact[]) => void
    addFavourite: (contact: Contact) => void
    removeFavourite: (id: number)=> void
    
}
export interface Phone {
    number: string
}

export interface Contact {
    id: string,
    first_name: string,
    last_name : string,
    created_at: Date,
    phones: Phone[]

}

export type favoriteContactsContextType ={
    favouriteContacts: Contact[],
    addFavourite: (contact: Contact) => void
    removeFavourite: (id: string)=> void
}
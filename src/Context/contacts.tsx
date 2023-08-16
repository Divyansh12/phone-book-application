import React, { createContext, useContext, useEffect, useState } from "react";
import { ContactsContextType, favoriteContactsContextType, regularContactsContextType } from "../models/models";
import { Contact } from "../GraphQL/generated/graphql";
import { useRegularContacts } from "./regularContacts";
import { useFavourites } from "./favouriteContacts";

 

// const initFavouriteContacts = {
//   
//   favouriteContacts: [],
// };


interface Props {
    children: React.ReactNode;
  }

export const ContactContext = createContext<ContactsContextType | null>(null);

const getInitialState = () => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
};

const ContactContextProvider: React.FC<Props> = ({children}) => {
  const [ contacts, setContacts] = useState<Contact[]>(getInitialState);
  const { regularContacts, addRegularContact, removeRegularContact, createRegularContacts } = useRegularContacts() as regularContactsContextType 
  const { favouriteContacts, createFavouriteContacts, addFavourite, removeFavourite, deleteFavourite } = useFavourites() as favoriteContactsContextType;




  useEffect(() => {
    console.log("In Use Effect of contact context")
    console.log(contacts)
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts, regularContacts, favouriteContacts]);

  const addContact = (contact: Contact) =>{
    console.log("Adding Contact")
    setContacts([...contacts, contact])
    addRegularContact(contact);
  };

  const updateContact = async (contact: Contact) => {
    const index = contacts.findIndex(item => item.id === contact.id);
    if (index !== -1) {
      // await setContacts(prevArray => prevArray.filter(obj => obj.id !== contact.id));

      // await setContacts([...contacts, contact])

      const newContacts = contacts.map((c) =>
        c.id === contact.id ? contact : c
      );
      await createContacts(newContacts)
      // contacts[index] = contact;
    }

    const favIndex = favouriteContacts.findIndex(item => item.id === contact.id);
    
    if (favIndex !== -1) {
      // await deleteFavourite(contact.id)
      // await addFavourite(contact)
      const newContacts = favouriteContacts.map((c) =>
        c.id === contact.id ? contact : c
      );
      await createFavouriteContacts(newContacts)
      // favouriteContacts[favIndex] = { ...contact };
    }

    const regIndex = regularContacts.findIndex(item => item.id === contact.id);
    if (regIndex !== -1) {

      // await removeRegularContact(contact.id)
      // await addRegularContact(contact)

      const newContacts = regularContacts.map((c) =>
        c.id === contact.id ? contact : c
      );
      await createRegularContacts(newContacts)
      // regularContacts[regIndex] = { ...contact };
    }

  }
   
    
  const createContacts= async (data: Contact[])=>{
    await setContacts(data);
    createRegularContacts(data);
    contacts.map((contact: Contact)=>{
      const favIndex = favouriteContacts.findIndex(item => item.id === contact.id);
      if (favIndex !== -1) {
      removeRegularContact(contact.id)

      }
    })

  }

  const removeContact = (contactId: number) =>{
    console.log("removing contact id" + contactId);
    setContacts(prevArray => prevArray.filter(obj => obj.id !== contactId));
    removeRegularContact(contactId);
    deleteFavourite(contactId);
  };

  return (
    <ContactContext.Provider value={{ addContact, removeContact, updateContact, createContacts,contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);

export default ContactContextProvider;

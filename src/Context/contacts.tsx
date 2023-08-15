import React, { createContext, useContext, useEffect, useState } from "react";
import { ContactsContextType } from "../models/models";
import { Contact } from "../GraphQL/generated/graphql";

 

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
  const [contacts, setContacts] = useState<Contact[]>(getInitialState);

  useEffect(() => {
    console.log("In Use Effect of contact context")
    console.log(contacts)
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact: Contact) =>{
    
    setContacts([...contacts, contact])
}
    ;

   
    
  const createContacts=(data: Contact[])=>{
    setContacts(data)
  }

  const removeContact = (contactId: number) =>
  setContacts(prevArray => prevArray.filter(obj => obj.id !== contactId))


    ;

  return (
    <ContactContext.Provider value={{ addContact, removeContact,  createContacts,contacts }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => useContext(ContactContext);

export default ContactContextProvider;

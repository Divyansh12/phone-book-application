import React, { createContext, useContext, useEffect, useState } from "react";
import { Contact } from "../GraphQL/generated/graphql";
import { regularContactsContextType } from "../models/models";


interface Props {
    children: React.ReactNode;
  }

export const regularContactContext = createContext<regularContactsContextType | null>(null);

const getInitialState = () => {
  const regularContacts = localStorage.getItem("regularContacts");
  return regularContacts ? JSON.parse(regularContacts) : [];
};

const RegularContactContextProvider: React.FC<Props> = ({children}) => {
  const [regularContacts, setregularContacts] = useState<Contact[]>([]);
  // const { contacts, removeContact, addContact } = useContacts() as ContactsContextType 

  

  useEffect(() => {
    console.log("In Regular Contact Use Effect")
    console.log(regularContacts)
    localStorage.setItem("regularContacts", JSON.stringify(regularContacts));
  }, [regularContacts]);

  const createRegularContacts=(data: Contact[])=>{
    setregularContacts(data)
  }

  const addRegularContact = (contact: Contact) =>{
    // removeContact(contact.id);
    console.log(" Adding reg contact ")
    console.log(contact)
    setregularContacts([...regularContacts, contact]);
}
    ;

  const removeRegularContact = (contactId: number) =>{
  //  addContact(regularContacts.find((contact) => contact.id === contactId) as Contact);
   setregularContacts(prevArray => prevArray.filter(obj => obj.id !== contactId));
  }

    ;

  return (
    <regularContactContext.Provider value={{ addRegularContact, removeRegularContact, createRegularContacts, regularContacts }}>
      {children}
    </regularContactContext.Provider>
  );
};

export const useRegularContacts = () => useContext(regularContactContext);

export default RegularContactContextProvider;

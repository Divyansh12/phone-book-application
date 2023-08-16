import React, { createContext, useContext, useEffect, useState } from "react";
import { Contact } from "../GraphQL/generated/graphql";
import { favoriteContactsContextType, regularContactsContextType } from "../models/models";
import { useRegularContacts } from "./regularContacts";

interface Props {
    children: React.ReactNode;
  }

export const favouriteContactContext = createContext<favoriteContactsContextType | null>(null);

const getInitialState = () => {
  const favouriteContacts = localStorage.getItem("favouriteContacts");
  return favouriteContacts ? JSON.parse(favouriteContacts) : [];
};

const FavouriteContactContextProvider: React.FC<Props> = ({children}) => {
  const [favouriteContacts, setfavouriteContacts] = useState<Contact[]>(getInitialState);
  const { addRegularContact, removeRegularContact } = useRegularContacts() as regularContactsContextType 

  

  useEffect(() => {
    localStorage.setItem("favouriteContacts", JSON.stringify(favouriteContacts));
  }, [favouriteContacts]);

  const createFavouriteContacts= async (data: Contact[])=>{
    await setfavouriteContacts(data);
    

  }
  
  const addFavourite = (contact: Contact) =>{
      removeRegularContact(contact.id);
      setfavouriteContacts([...favouriteContacts, contact]);
  };

  
  const removeFavourite = (contactId: number) =>{
   addRegularContact(favouriteContacts.find((contact) => contact.id === contactId) as Contact);
   setfavouriteContacts(prevArray => prevArray.filter(obj => obj.id !== contactId));
  }

  const deleteFavourite =  (contactId: number) =>{
    setfavouriteContacts(prevArray => prevArray.filter(obj => obj.id !== contactId));

  }

    ;

  return (
    <favouriteContactContext.Provider value={{ addFavourite, removeFavourite, createFavouriteContacts, deleteFavourite, favouriteContacts }}>
      {children}
    </favouriteContactContext.Provider>
  );
};

export const useFavourites = () => useContext(favouriteContactContext);

export default FavouriteContactContextProvider;

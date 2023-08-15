import React, { createContext, useContext, useEffect, useState } from "react";
// import { Contact } from "../models/models";
import { Contact } from "../GraphQL/generated/graphql";


// const initFavouriteContacts = {
//   
//   favouriteContacts: [],
// };

type favoriteContactsContextType ={
    favouriteContacts: Contact[],
    addFavourite: (contact: Contact) => void
    removeFavourite: (id: number)=> void
}

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

  useEffect(() => {
    console.log("In Use Effect")
    console.log(favouriteContacts)
    localStorage.setItem("favouriteContacts", JSON.stringify(favouriteContacts));
  }, [favouriteContacts]);

  const addFavourite = (contact: Contact) =>{
    
    setfavouriteContacts([...favouriteContacts, contact])
}
    ;

  const removeFavourite = (contactId: number) =>
  setfavouriteContacts(prevArray => prevArray.filter(obj => obj.id !== contactId))


    ;

  return (
    <favouriteContactContext.Provider value={{ addFavourite, removeFavourite, favouriteContacts }}>
      {children}
    </favouriteContactContext.Provider>
  );
};

export const useFavourites = () => useContext(favouriteContactContext);

export default FavouriteContactContextProvider;

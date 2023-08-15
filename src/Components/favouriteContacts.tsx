import React, { useEffect, useState } from "react";
import { useFavourites } from "../Context/favouriteContacts";
import ContactCard from "./ContactCard";
import {favoriteContactsContextType} from '../models/models'
import {Phone, Contact}from "../GraphQL/generated/graphql";

const GetFavourites: React.FC = () => {
//   const { error, loading, data } = useQuery(LOAD_USERS);
//   const [contacts, setContacts] = useState<Contact[]>([]);
  const { favouriteContacts, addFavourite, removeFavourite } = useFavourites() as favoriteContactsContextType;

  
  return (
    <div>
        {/* <h1> Favourite Contacts </h1>
        {favouriteContacts.map((val: Contact) => {
        return <div> <h3> {val.id}</h3>
        <h3> {val.first_name + " " + val.last_name}</h3>
        <button onClick={() => removeFromFavourites(val.id)} >Remove from Favourite</button>
        // 
        </div> 
        ;
      })}
      
      <h1>Regular Contact</h1> */}
      
      {favouriteContacts.map((val: Contact) => {
        //  console.log(typeof( favouriteContacts))
         const isFavourite=true;
        // const isFavourite = favouriteContacts.some((contact) => contact.id === val.id);
        return <ContactCard
        contact={val}
        isFavourite={isFavourite}
        addToFavourite={addFavourite}
        removeFromFavourite={removeFavourite}
        key={val.id}
      />
        ;
      })}
    </div>
  );
}

export default GetFavourites;
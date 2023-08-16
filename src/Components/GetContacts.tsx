import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_CONTACTS } from "../GraphQL/Queries/Queries";
import { useFavourites } from "../Context/favouriteContacts";
import ContactCard from "./ContactCard";
import {ContactsContextType,favoriteContactsContextType} from '../models/models';
import {Phone, Contact}from "../GraphQL/generated/graphql";


import { useContacts } from "../Context/contacts";


const GetContacts: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_CONTACTS);
  // const [contacts, setContacts] = useState<Contact[]>([]);

  const { contacts, createContacts } = useContacts() as ContactsContextType 
  const { favouriteContacts, addFavourite, removeFavourite } = useFavourites() as favoriteContactsContextType;

  useEffect(() => {
    if (data) {
        
        createContacts(data.contact);
    }
  }, [data]);

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
      
      {contacts.map((val: Contact) => {
        
        const isFavourite = favouriteContacts.some((contact) => contact.id === val.id);
        return <ContactCard
        contact={val}
        isFavourite={isFavourite}
        addToFavourite={addFavourite}
        removeFromFavourite={removeFavourite}
        key={val.id}
      />
        ;
      })
      
      }
    </div>
  );
}

export default GetContacts;
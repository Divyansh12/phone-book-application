import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries/Queries";

type Phone ={
    number: string
}

type Contact = {
    id: string,
    first_name: string,
    last_name : string,
    created_at: Date,
    phones: Phone[]

}

const GetUsers: React.FC = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [favoriteContacts, setFavoriteContacts] = useState<Contact[]>([]);

  const addToFavourites=(id:string)=>{
    
    var newObject=contacts.find((contact:Contact) => contact.id === id) as Contact
    
    favoriteContacts.push(newObject)
    console.log(favoriteContacts)
  }

  const removeFromFavourites=(id:string)=>{
   
    setFavoriteContacts(prevArray => prevArray.filter(obj => obj.id !== id))
    console.log(favoriteContacts)

     
  }

  useEffect(() => {
    if (data) {
        console.log(data)
      setContacts(data.contact);
    }
  }, [data]);

  return (
    <div>
        <h1> Favourite Contacts </h1>
        {favoriteContacts.map((val: Contact) => {
        return <div> <h3> {val.id}</h3>
        <h3> {val.first_name + " " + val.last_name}</h3>
        <button onClick={() => removeFromFavourites(val.id)} >Remove from Favourite</button>
        {/* <h2> </h2> */}
        </div> 
        ;
      })}
      
      <h1>Regular Contact</h1>
      
      {contacts.map((val: Contact) => {
        return <div> <h3> {val.id}</h3>
        <h3> {val.first_name + " " + val.last_name}</h3>
        <button onClick={() => addToFavourites(val.id)} >Add to Favourite</button>
        {/* <h2> </h2> */}
        </div> 
        ;
      })}
    </div>
  );
}

export default GetUsers;
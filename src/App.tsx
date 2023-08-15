import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { useState } from "react";

import { onError } from "@apollo/client/link/error";
import GetContacts from "./Components/GetContacts";
import GetFavourites from "./Components/favouriteContacts";
import Form from "./Components/CreateContact";
import FavouriteContactContextProvider from './Context/favouriteContacts';
import Nav from "./Components/Nav";
import ContactContextProvider from "./Context/contacts";



// import Form from "./Components/Form";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://wpe-hiring.tokopedia.net/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const [view, setView] = useState("contacts");

  return (
    <ApolloProvider client={client}>
    <ContactContextProvider>
    <FavouriteContactContextProvider>
    
      {" "}
      <Nav view={view} setView={setView} />

        {view === "contacts" ?  <GetContacts /> : <GetFavourites />}
     
      <Form />
    
    </FavouriteContactContextProvider>
    </ContactContextProvider>
    </ApolloProvider>
  );
}

export default App;
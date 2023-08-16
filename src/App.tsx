import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import FavouriteContactContextProvider from './Context/favouriteContacts';
import ContactContextProvider from "./Context/contacts";
import ContactMain from "./Components/ContactMain";
import RegularContactContextProvider from "./Context/regularContacts";



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

  return (
    <ApolloProvider client={client}>
    <RegularContactContextProvider>
    <FavouriteContactContextProvider>

    <ContactContextProvider>
    
      {/* {" "} */}
      

        <ContactMain></ContactMain>
     
      {/* <Form /> */}
    
    </ContactContextProvider>
    </FavouriteContactContextProvider>

    </RegularContactContextProvider>
    </ApolloProvider>
  );
}

export default App;
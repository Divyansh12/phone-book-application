import { gql } from "@apollo/client";

export const LOAD_CONTACTS = gql`
    query GetContactList {
        contact{
        id
        created_at
        first_name
        id
        last_name
        phones {
            number
        }
        }
    }
  
`;
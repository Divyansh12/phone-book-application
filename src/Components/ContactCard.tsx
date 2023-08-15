import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Phone, Contact } from "../GraphQL/generated/graphql";;



// interface DefaultTheme {}

// declare module 'react' {
//   interface HTMLAttributes<T> extends DOMAttributes<T> {
//     css?: Interpolation<DefaultTheme>;
//   }
// }

interface CardProps {
  contact: Contact;
  isFavourite: boolean;
  addToFavourite: (contact: Contact)=>void;
  removeFromFavourite: (id: number)=> void;
}

const cardStyles = css`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  ` ;

const titleStyles = css`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const buttonStyles = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CardContainer = styled('div')`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const ContactCard: React.FC<CardProps> = ({ contact = {},
    isFavourite,
    addToFavourite,
    removeFromFavourite, }) => {
        const { id, first_name, last_name, phones } = contact as Contact;
  return (
    <div css={cardStyles}>
      <h2 css={titleStyles}>{first_name +" " + last_name}</h2>
      <p>{phones.map((val: Phone) => {
        return <div> <h3> {val.number}</h3>
        
        </div> 
        ;
      })}</p>
    <div>
              {isFavourite ? (
                <button css={buttonStyles}
                  onClick={() => removeFromFavourite(id)}
                >
                  Remove
                </button>
              ) : (
                <button css={buttonStyles}
                  onClick={() => addToFavourite(contact as Contact)}
                >
                  Add to favourite
                </button>
                
              )}
        </div>
    </div>
  );
};

export default ContactCard;
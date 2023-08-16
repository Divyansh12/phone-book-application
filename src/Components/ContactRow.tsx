import React, { useEffect } from 'react';
import ContactAvatar from './ContactAvatar';
import { TrashIcon } from '@heroicons/react/24/outline';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Contact } from '../GraphQL/generated/graphql';



const buttonStyles = css`

    box-shadow: none;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0;

    // font-size: 1rem;
    font-family: inherit;
    border: none;
    // border-radius: 8px;
    // padding: 0.5rem 0.75rem;
    // box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    background-color: transparent;
    line-height: 1.5;
    margin: 0;
  
  &:hover {
    color: #eeb004 !important;
    background-color: #e8ecef; /* New color for hover */
  }

  &[value="false"] {
    color: #a4a4a4;
  }

  &[value="true"] {
    color: #eeb004; /* New color for value="false" */
  }
`;


const listAvatar = css`
  height: 50px !important;
  width: 50px !important;
`;
const bgcolor='#e8ecef'

const tr = css`
  cursor: pointer;

  &:hover {
    --bs-table-bg-state: ${bgcolor} !important;
  }
`;

const trashIcon = css`
  height: 30px !important;
  width: 30px !important;
  color: #eb675b;
`;

const fullName = css`
  margin-left: 2%;
`;

const justifyContentCenter = css`
  justify-content: center;
`;


interface ContactRowProps {
  contact: Contact;
  showActiveUser: (id: number) => void;
  handleShow: () => void;
  isFavourite: boolean;
  addToFavourite: (contact: Contact)=>void;
  removeFromFavourite: (id: number)=> void;
  setDeleteContactId: (id: number) => void;
}

const ContactRow: React.FC<ContactRowProps> = ({
  contact,
  showActiveUser,
  isFavourite,
  addToFavourite,
  removeFromFavourite,
  handleShow,
  setDeleteContactId,
}) => {

    useEffect(() => {
        
      }, [contact]);

  return (
    <tr css={tr} key={contact.id}>
      
      <td onClick={() => showActiveUser(contact.id)}>
        <div css={fullName} className='contact d-flex'>
          <div className='contact-avatar m-2'>
            <ContactAvatar
              name={contact.first_name + ' ' + contact.last_name}
              className='list-avatar'
              css={listAvatar}
            />
          </div>
          <div  className='contact-info d-flex flex-column justify-content-center m-2'>
            <div className='contact-info-name truncate-string'>
              <p className='m-0 truncate-string'>
                {contact.first_name} {contact.last_name}
              </p>
            </div>
            
          </div>
        </div>
      </td>
      <td className='align-middle' onClick={() => showActiveUser(contact.id)}>
        <div css={justifyContentCenter} className='favourite d-flex align-items-center m-auto'>
            {isFavourite ? (
                    <button css={buttonStyles}
                    onClick={() => removeFromFavourite(contact.id)}
                    value="true"
                    >
                    ★
                    </button>
                ) : (
                    <button css={buttonStyles}
                    onClick={() => addToFavourite(contact as Contact)}
                    value="false"
                    >
                    ☆
                    </button>
                    
            )}
        </div>
      </td>
      <td className='align-middle text-center' title='Delete Contact'>
        <TrashIcon
          className='trash-icon'
          css={trashIcon}
          onClick={() => {
            handleShow();
            setDeleteContactId(contact.id);
          }}
        />
      </td>
    </tr>
  );
};

export default ContactRow;

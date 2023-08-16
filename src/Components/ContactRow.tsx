import React, { useEffect } from 'react';
import ContactAvatar from './ContactAvatar';
import { TrashIcon } from '@heroicons/react/24/outline';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
// import './contactrow.scss';
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
    background-color: white;
    line-height: 1.5;
    margin: 0;
  
  &:hover {
    color: #eeb004; /* New color for hover */
  }

  &[value="false"] {
    color: #a4a4a4;
  }

  &[value="true"] {
    color: #eeb004; /* New color for value="false" */
  }
`;

interface ContactRowProps {
  contact: Contact;
  showActiveUser: (id: number) => void;
  checkedContactIdList: number[];
  setCheckedContactIDList: (contactIds: number[]) => void;
  handleShow: () => void;
  isFavourite: boolean;
  addToFavourite: (contact: Contact)=>void;
  removeFromFavourite: (id: number)=> void;
  setIsMultiDelete: (value: boolean) => void;
  setDeleteContactId: (id: number) => void;
}

const ContactRow: React.FC<ContactRowProps> = ({
  contact,
  showActiveUser,
  checkedContactIdList,
  setCheckedContactIDList,
  isFavourite,
  addToFavourite,
  removeFromFavourite,
  handleShow,
  setIsMultiDelete,
  setDeleteContactId,
}) => {

    useEffect(() => {
        // console.log("In Contact Row")
        // console.log(contact)
      }, [contact]);

  return (
    <tr key={contact.id}>
      {/* <td className='align-middle text-center'>
        <input
          title='Select Contact'
          type='checkbox'
          checked={checkedContactIdList.includes(contact.id)}
          onChange={() => {
            if (checkedContactIdList.includes(contact.id)) {
              setCheckedContactIDList(
                checkedContactIdList.filter((item) => item !== contact.id)
              );
            } else {
              setCheckedContactIDList([...checkedContactIdList, contact.id]);
            }
          }}
        />
      </td> */}
      <td onClick={() => showActiveUser(contact.id)}>
        <div className='contact d-flex'>
          <div className='contact-avatar m-2'>
            {/* <ContactAvatar
              name={contact.first_name + ' ' + contact.last_name}
              className='list-avatar'
            /> */}
          </div>
          <div className='contact-info d-flex flex-column justify-content-center m-2'>
            <div className='contact-info-name truncate-string'>
              <p className='m-0 truncate-string'>
                {contact.first_name} {contact.last_name}
              </p>
            </div>
            {/* <div className='contact-info-email'>
              <p className='m-0'>
                <span className='text-secondary truncate-string'>
                  {contact.email}
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </td>
      <td className='align-middle' onClick={() => showActiveUser(contact.id)}>
        <div className='company-name d-flex align-items-center m-auto'>
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
          {/* <p className='m-0 truncate-string'>{contact.company}</p> */}
        </div>
      </td>
      <td className='align-middle text-center' title='Delete Contact'>
        <TrashIcon
          className='trash-icon'
          onClick={() => {
            handleShow();
            setIsMultiDelete(false);
            setDeleteContactId(contact.id);
          }}
        />
      </td>
    </tr>
  );
};

export default ContactRow;

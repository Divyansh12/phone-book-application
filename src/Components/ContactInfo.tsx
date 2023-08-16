import React, { useEffect, useState } from 'react';
import ContactAvatar from './ContactAvatar';
import ContactButton from './ContactButton';

// import './contactinfo.scss';
import { Contact, Phone } from '../GraphQL/generated/graphql';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonStyles = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface ContactInfoProps {
  activeContact: Contact;
  setModalShow: (value: boolean) => void;
  setIsEdit: (value: boolean) => void;
  isFavourite: boolean;
  addToFavourite: (contact: Contact)=>void;
  removeFromFavourite: (id: number)=> void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  activeContact,
  setModalShow,
  setIsEdit,
  isFavourite,
  addToFavourite,
  removeFromFavourite,
}) => {
  const { id, first_name, last_name, phones } = activeContact;

  const [contact, setContact] = useState<Contact>({} as Contact );

  useEffect(() => {
    setContact({
      id: id,
      first_name: first_name,
      last_name: last_name,
      phones: phones,
      
    } as Contact);
  }, [id, first_name, last_name, phones]);

  return (
    <div className='main-content-card'>
      <div className='container p-0'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card mb-3'>
              <div className='card-body'>
                <div className='d-flex flex-column align-items-center text-center'>
                  {/* <ContactAvatar
                    name={contact.first_name + ' ' + contact.last_name}
                    className={'info-avatar'}
                  /> */}
                  <div className='mt-3 w-100'>
                    <h4 className='m-auto fullname'>
                      {contact.first_name + ' ' + contact.last_name}
                    </h4>
                    
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Full Name</h6>
                  </div>
                  <div className='col-8 truncate-string'>
                    {contact.first_name} {contact.last_name}
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Phone Numbers</h6>
                  </div>
                  {phones.map((val: Phone) => {
                    return <div className='col-8  '>{val.number}</div>
                    ;
                })}
                  
                </div>
                <hr />

                <div>
              
        </div>
        <div className='row'>
                  <div className='col-12 d-flex justify-content-center'>
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
                
        
                <div className='row'>
                  <div className='col-12 d-flex justify-content-center'>
                    <ContactButton
                      btnIcon={'pencil'}
                      btnText={'Edit Contact'}
                      setModalShow={setModalShow}
                      btnType={'edit'}
                      setIsEdit={setIsEdit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

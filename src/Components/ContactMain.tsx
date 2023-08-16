import React, { useState, useEffect } from 'react';


// import Logo from '../../assets/contact-list.png';

import { Button } from 'react-bootstrap';
import { Contact, Phone, Phone_Insert_Input, useAddContactWithPhonesMutation, useAddNumberToContactMutation, useDeleteContactMutationMutation, useEditContactByIdMutation, useEditPhoneNumberMutation } from '../GraphQL/generated/graphql';
import { ContactsContextType, favoriteContactsContextType, regularContactsContextType } from '../models/models';
import { useContacts } from '../Context/contacts';

import ContactModel from './ContactModel';
import ContactButton from './ContactButton';
import ContactTable from './ContactTable';
import ContactInfo from './ContactInfo';
import { useFavourites } from '../Context/favouriteContacts';
import { useQuery } from '@apollo/client';
import { LOAD_CONTACTS } from '../GraphQL/Queries/Queries';
import { TrashIcon } from '@heroicons/react/24/outline';
import SearchBar from './SearchBar';
import DeleteModel from './DeleteModal';
import { useRegularContacts } from '../Context/regularContacts';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const mainContentBottom = css`
  height: 100%;
  width: 100%;
`;

const mainContentTop = css`
  height: 50px;
  box-shadow: 5px -3px 8px 0px;
`;

const logo = css`
  height: 50px;
  pointer-events: none;
  margin: 8px 10px 5px 0;
`;




const ContactMain: React.FC = () => {
    
  const { loading, data } = useQuery(LOAD_CONTACTS);

    const { contacts, createContacts, updateContact, addContact, removeContact } = useContacts() as ContactsContextType;
    const { regularContacts, addRegularContact, removeRegularContact, createRegularContacts } = useRegularContacts() as regularContactsContextType 

    const { favouriteContacts, addFavourite, removeFavourite } = useFavourites() as favoriteContactsContextType;

    const [AddContactWithPhones] = useAddContactWithPhonesMutation()

    const [EditContactById] = useEditContactByIdMutation()
    const [EditPhoneNumberMutation] = useEditPhoneNumberMutation()

    const [AddNumberToContact] = useAddNumberToContactMutation()

    const [DeleteContactMutation] = useDeleteContactMutationMutation()



  useEffect(() => {
      if (data) {
      
        createContacts(data.contact);
    }
  }, [data]);


  const [filterText, setFilterText] = useState<string>('');

  const [activeContact, setActiveContact] = useState<Contact | null>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  const [modalShow, setModalShow] = useState<boolean>(false);

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [checkedContactIdList, setCheckedContactIDList] = useState<number[]>([]);

  const [isMultiDelete, setIsMultiDelete] = useState<boolean>(false);

  const [deleteContactId, setDeleteContactId] = useState<number | null>(null);

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleDelete = () => {
    if (isMultiDelete) {
      deleteCheckedContacts(checkedContactIdList);
    } else {
      deleteContact(deleteContactId as number);
    }
    handleClose();
  };

  const addContactDB = async (contact: Contact) => {
    
    var phones: Phone_Insert_Input[]=[];
    contact.phones.map((val: Phone) => {
        var phone_number={number: val.number} as Phone_Insert_Input;
        phones.push(phone_number);
      })
    const response = await AddContactWithPhones({
      variables: {
        first_name: contact.first_name,
        last_name: contact.last_name,
        phones: phones
      },
    });

    var new_contact=response.data?.insert_contact?.returning[0] as Contact
    addContact(new_contact)
    
  };

  const deleteContact = async(id: number) => {
    const delete_response = await DeleteContactMutation({
      variables: {
        id: id,
      },
    });
    removeContact(id)
    if (activeContact && activeContact.id === id) {
      setActiveContact(null);
      setIsActive(false);
    }
    if (checkedContactIdList.includes(id)) {
      setCheckedContactIDList(
        checkedContactIdList.filter((contactId) => contactId !== id)
      );
    }
  };

  const editContact = async (new_contact: Contact) => {
    
    const old_contact = contacts.find((contact) => contact.id === new_contact.id);
   
    const contact_response = await EditContactById({
      variables: {
        id: new_contact.id,
        _set:{ 
        first_name: new_contact.first_name,
        last_name: new_contact.last_name,
        }
      },
    });
    const old_contact_length=old_contact?.phones?.length as number;
    const new_contact_length=new_contact?.phones?.length as number;


    if(old_contact_length === new_contact_length){
      old_contact?.phones.map((val: Phone, index)=>{
        
        const phone_response = EditPhoneNumberMutation({
          variables: {
            pk_columns: {
              number: val.number,
              contact_id: old_contact?.id as number
            },
            new_phone_number: new_contact?.phones[index]?.number as string
            },
        })
        
        })
      }else if(old_contact_length < new_contact_length){

        old_contact?.phones.map((val: Phone, index)=>{
        
          const phone_response = EditPhoneNumberMutation({
            variables: {
              pk_columns: {
                number: val.number,
                contact_id: old_contact?.id as number
              },
              new_phone_number: new_contact?.phones[index]?.number as string
              },
          })         
          
          });

          const left_phones=new_contact?.phones?.slice(old_contact_length,)

          
          left_phones?.map((val: Phone, index)=>{
            const add_phone_response = AddNumberToContact({
              variables: {
                  contact_id: old_contact?.id as number,
                  phone_number: val.number,               
                },
            })         
            
          })

      }
      
    
    updateContact(new_contact);
    setActiveContact(new_contact);
  };

  const showActiveUser = (id: number) => {
   
    const newActiveContact = contacts.find((contact) => contact.id === id);
    setActiveContact(newActiveContact as Contact);
    setIsActive(true);
  };

  const isFavourite = favouriteContacts.some((contact) => contact.id === activeContact?.id);


  const deleteCheckedContacts = (checkedContactIdList: number[]) => {
    const newContacts = contacts.filter((contact) =>
      checkedContactIdList.includes(contact.id) ? false : true
    );
    // setContacts(newContacts);
    setCheckedContactIDList([]);
    checkedContactIdList.forEach((id) => {
      if (activeContact && activeContact.id === id) {
        setActiveContact(null);
        setIsActive(false);
      }
    });
  };

  return (

    <div className='main-content container-fluid'>
      <div className='row'>
        <div css={mainContentTop} className='main-content-top col-xl-12'></div>
      </div>
      <div className='row'>
        <div css={mainContentBottom} className='main-content-bottom container-fluid p-lg-5 p-3'>
          <div className='row'>
            <div className='col-xl-12 d-flex'>
              <div className='main-content-header'>
                <h3>Contacts</h3>
                <p>Welcome to Phone Book</p>
              </div>
            </div>
          </div>
          <div className='row mb-4 p-lg-5 pb-lg-0 pt-lg-0'>
            <div className='col-xl-3 col-md-6'>
              <SearchBar
                filterText={filterText}
                setFilterText={setFilterText}
              />
            </div>
            <div className='col-xl-2 col-md-3 d-flex'>
              <ContactButton
                btnIcon={'plus'}
                btnText={'Add Contact'}
                btnType={'add'}
                setModalShow={setModalShow}
                setIsEdit={setIsEdit}
              />
            </div>
            <div className='col-xl-7 col-md-3 d-flex'>
              {checkedContactIdList.length > 0 ? (
                <Button
                  title={`Delete ${checkedContactIdList.length} contact(s)`}
                  className='custom-btn'
                  onClick={() => {
                    handleShow();
                    setIsMultiDelete(true);
                  }}
                >
                  <TrashIcon className='custom-btn-icon' />
                  Delete
                </Button>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='row p-lg-5 pb-lg-0 pt-lg-0'>
            <div className='col-lg-7 '> Favourite Contacts </div>
            <div className='col-lg-7 '>
              <ContactTable
                contacts={favouriteContacts}
                filterText={filterText}
                showActiveUser={showActiveUser}
                checkedContactIdList={checkedContactIdList}
                setCheckedContactIDList={setCheckedContactIDList}
                handleShow={handleShow}
                setIsMultiDelete={setIsMultiDelete}
                setDeleteContactId={setDeleteContactId}
              />
            </div>
            <div className='col-lg-7 '> Regular Contacts </div>
            <div className='col-lg-7 '>
              <ContactTable
                contacts={regularContacts}
                filterText={filterText}
                showActiveUser={showActiveUser}
                checkedContactIdList={checkedContactIdList}
                setCheckedContactIDList={setCheckedContactIDList}
                handleShow={handleShow}
                setIsMultiDelete={setIsMultiDelete}
                setDeleteContactId={setDeleteContactId}
              />
            </div>
            <div className='col-lg-5'>
              {isActive && (
                <ContactInfo
                  key={activeContact?.id as number}
                  activeContact={activeContact as Contact}
                  setIsEdit={setIsEdit}
                  setModalShow={setModalShow}
                  isFavourite={isFavourite}
                  addToFavourite={addFavourite}
                  removeFromFavourite={removeFavourite}
                />
              )}
            </div>
            {modalShow && (
              <ContactModel
                activeContact={activeContact as Contact}
                isEdit={isEdit}
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={isEdit ? 'Edit Contact' : 'Add Contact'}
                addContact={addContactDB}
                editContact={editContact}
              />
            )}
            {show && (
              <DeleteModel
                show={show}
                handleClose={handleClose}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default ContactMain;

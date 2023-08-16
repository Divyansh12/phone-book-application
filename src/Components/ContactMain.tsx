import React, { useState, useEffect } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
// import ContactTable from '../ContactTable/ContactTable';
// import ContactInfo from '../ContactInfo/ContactInfo';
// import ContactButton from '../ContactButton/ContactButton';
// import ContactModel from '../ContactModel/ContactModel';
// import DeleteModel from '../DeleteModel/DeleteModel';

// import Logo from '../../assets/contact-list.png';

// import './contactmain.scss';
import { Button } from 'react-bootstrap';
import { AddNumberToContactDocument, Contact, Phone, Phone_Insert_Input, useAddContactWithPhonesMutation, useAddNumberToContactMutation, useDeleteContactMutationMutation, useEditContactByIdMutation, useEditPhoneNumberMutation } from '../GraphQL/generated/graphql';
import { ContactsContextType, favoriteContactsContextType, regularContactsContextType } from '../models/models';
import { useContacts } from '../Context/contacts';
import GetContacts from './GetContacts';
import GetFavourites from "./favouriteContacts";
import Nav from "./Nav";
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

// import { TrashIcon } from '@heroicons/react/outline';

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
    // console.log(contacts)
      if (data) {
        console.log("In Contact Main Use Effect")
        // console.log(data)
        // console.log(contacts)
        createContacts(data.contact);
    }
    // localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [data]);

  const [view, setView] = useState("contacts");

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
    // setContacts([...contacts, contact]);
    console.log("Phone Insert")
    console.log(contact)
    console.log(contact.phones as Phone_Insert_Input[])
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
    // createContacts(contacts)
    // console.log(response.data?.insert_contact?.returning[0] as Contact)
    // if (error) {
    //   console.log(error);
    // }
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
    console.log("Edit Contact Function")
    console.log(new_contact)
    const old_contact = contacts.find((contact) => contact.id === new_contact.id);
    console.log(old_contact)

    
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

    console.log("old contact phone length " + old_contact_length)
    console.log("new contact phone length " + new_contact_length)

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
        console.log("Add new contact phone length " + new_contact_length)

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

        console.log("Left Phone ");
        console.log(left_phones);
          
          left_phones?.map((val: Phone, index)=>{
            const add_phone_response = AddNumberToContact({
              variables: {
                  contact_id: old_contact?.id as number,
                  phone_number: val.number,               
                },
            })         
            
          })

      }
      
    
    

    // const newContacts = contacts.map((c) =>
    //   c.id === new_contact.id ? new_contact : c
    // );
    updateContact(new_contact);
    setActiveContact(new_contact);
  };

  const showActiveUser = (id: number) => {
    console.log("Active Contact")
    console.log(activeContact)
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
        <div className='main-content-top col-xl-12'></div>
      </div>
      <div className='row'>
        <div className='main-content-bottom container-fluid p-lg-5 p-3'>
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

    // <div className='main-content container-fluid'>
    //   <div className='row'>
    //     {/* Rest of your JSX code */}
    //     {/* <GetContacts></GetContacts> */}
    //     <Nav view={view} setView={setView} />

    //     {/* {view === "contacts" ?  <GetContacts /> : <GetFavourites />} */}
    //     <div className='col-lg-7 '>
          
    //           <ContactTable
    //             // contacts={contacts}
    //             filterText={filterText}
    //             showActiveUser={showActiveUser}
    //             checkedContactIdList={checkedContactIdList}
    //             setCheckedContactIDList={setCheckedContactIDList}
    //             handleShow={handleShow}
    //             setIsMultiDelete={setIsMultiDelete}
    //             setDeleteContactId={setDeleteContactId}
    //           />
    //         </div>
    //         <div className='col-lg-5'>
    //           {

    //           isActive 
    //           && (
    //             <ContactInfo
    //               activeContact={activeContact as Contact}
    //               setIsEdit={setIsEdit}
    //               setModalShow={setModalShow}
    //               isFavourite={isFavourite}
    //               addToFavourite={addFavourite}
    //               removeFromFavourite={removeFavourite}
    //             />
    //           )}
    //         </div>
    //     <ContactButton
    //     btnIcon={'plus'}
    //     btnText={'Add Contact'}
    //     btnType={'add'}
    //     setModalShow={setModalShow}
    //     setIsEdit={setIsEdit}
    //     ></ContactButton>
    //     <ContactModel 
    //         activeContact={activeContact as Contact}
    //         isEdit={isEdit}
    //             show={modalShow}
    //             onHide={() => setModalShow(false)}
    //             title={isEdit ? 'Edit Contact' : 'Add Contact'}
    //             addContact={addContactDB}
    //             editContact={editContact}></ContactModel>
        
        
    //   </div>
    // </div>
  );
};

export default ContactMain;

import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ContactRow from './ContactRow';

// import './contacttable.scss';
import { Contact, Phone } from '../GraphQL/generated/graphql';
import { useContacts } from '../Context/contacts';
import { ContactsContextType, favoriteContactsContextType, regularContactsContextType } from '../models/models';
import { useFavourites } from '../Context/favouriteContacts';
import { useRegularContacts } from '../Context/regularContacts';

interface ContactTableProps {
  contacts: Contact[];
  filterText: string;
  showActiveUser: (id: number) => void;
  checkedContactIdList: number[];
  setCheckedContactIDList: (contactIds: number[]) => void;
  handleShow: () => void;
  setIsMultiDelete: (value: boolean) => void;
  setDeleteContactId: (id: number) => void;
}

const ContactTable: React.FC<ContactTableProps> = ({
  contacts,
  filterText,
  showActiveUser,
  checkedContactIdList,
  setCheckedContactIDList,
  handleShow,
  setIsMultiDelete,
  setDeleteContactId,
}) => {
//   const { contacts } = useContacts() as ContactsContextType;
  const { favouriteContacts, removeFavourite, addFavourite } = useFavourites() as favoriteContactsContextType;

  const { regularContacts } = useRegularContacts() as regularContactsContextType;

  const [count, setCount] = useState(10);

  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);


  const showMoreItems = () => {
    setCount((prevValue) => prevValue + 5);
    console.log(count)
  };


  const [contactList, setContactList] = useState<Contact[]>(regularContacts);

  useEffect(() => {
    // console.log("In Contact Table")
    // console.log(contactList)
    console.log("Acount")
    console.log(count)

    

    const filteredContacts = contacts.filter(
      (contact) =>{
        var phones: string='';
        contact.phones.map((val: Phone) => {
        phones = phones +" "+ val.number as string;
      })
        
      return contact.first_name.toLowerCase().includes(filterText.toLowerCase()) ||
        contact.last_name.toLowerCase().includes(filterText.toLowerCase()) ||
        (
          contact.first_name.toLowerCase() +
          ' ' +
          contact.last_name.toLowerCase()
        ).includes(filterText.toLowerCase()) 
        || 
        phones.toLowerCase().includes(filterText.toLowerCase())
        
      }
      
    );
    // console.log(filteredContacts)
    setContactList(filteredContacts);
    
  }, [contacts, regularContacts, favouriteContacts, count, filterText, showLoadMore]);

  useEffect(()=>{
    console.log("Contact List Length")
    console.log(contactList.length)
    console.log(contactList.length>count)
    if(contactList.length>count){
        setShowLoadMore(true)
    }else{
        setShowLoadMore(false)
    }
},[contactList])

  return (
    <div className='main-content-list'>
      <Table>
        <thead>
          <tr>
            {/* <th className='text-center col-1'>+</th> */}
            <th className='text-secondary col-5'>Name</th>
            <th className='text-secondary col-5'>Favourite</th>
            <th className='text-center p-1 col-1'></th>
          </tr>
        </thead>
        {/* <tbody>
            <tr> <td colSpan={4} className='text-center fw-bold'>
                Favourite Contacts
              </td> 
            </tr>
          {favouriteContacts.length > 0 ? (
            favouriteContacts.map((contact, index) => (
              <ContactRow
                key={index}
                contact={contact}
                showActiveUser={showActiveUser}
                checkedContactIdList={checkedContactIdList}
                setCheckedContactIDList={setCheckedContactIDList}
                handleShow={handleShow}
                setIsMultiDelete={setIsMultiDelete}
                setDeleteContactId={setDeleteContactId}
              />
            ))
          ) : (
            <tr>
              <td colSpan={4} className='text-center text-secondary fw-bold'>
                No Favourites contacts found
              </td>
            </tr>
          )}
        </tbody> */}
        <tbody>
        {/* <tr> <td colSpan={4} className='text-center fw-bold'>
                Regular Contacts
              </td>
         </tr> */}

          {contactList.length > 0 ? (
            
            contactList?.slice(0, count).map((contact, index) => {
                const isFavourite = favouriteContacts.some((val) => val.id === contact.id);
                console.log("is Fav")
                console.log(isFavourite)
                return <ContactRow
                key={index}
                contact={contact}
                showActiveUser={showActiveUser}
                checkedContactIdList={checkedContactIdList}
                setCheckedContactIDList={setCheckedContactIDList}
                isFavourite={isFavourite}
                removeFromFavourite={removeFavourite}
                addToFavourite={addFavourite}
                handleShow={handleShow}
                setIsMultiDelete={setIsMultiDelete}
                setDeleteContactId={setDeleteContactId}
              />
            })
          ) : (
            <tr>
              <td colSpan={4} className='text-center text-secondary fw-bold'>
                No contacts found
              </td>
            </tr>
          )}
          {showLoadMore && (
        <tr> 
            <td colSpan={4} className='text-center fw-bold'>
                <div className=" flex flex-col  pt-12	">
                    <button
                    className="content-between bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded"
                    onClick={showMoreItems}
                    >
                    Load More
                    </button>
            </div>
        </td>
        </tr>)
        }
        </tbody>
      </Table>
    </div>
  );
};

export default ContactTable;

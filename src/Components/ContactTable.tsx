import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ContactRow from './ContactRow';
import { Contact, Phone } from '../GraphQL/generated/graphql';
import { favoriteContactsContextType, regularContactsContextType } from '../models/models';
import { useFavourites } from '../Context/favouriteContacts';
import { useRegularContacts } from '../Context/regularContacts';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const mainContentList = css`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const tbody = css`
//   border: 0 !important;
`;

const theadTr = css`
  text-align: center;
  --bs-table-bg-state: #f1f1f1 !important;
`;

const tbodyTd = css`
  border: none !important;
`;

const tbodyTrHover = css`
  &:hover {
    background-color: #e8ecef !important;
  }
`;



interface ContactTableProps {
  contacts: Contact[];
  filterText: string;
  showActiveUser: (id: number) => void;
  handleShow: () => void;
  setDeleteContactId: (id: number) => void;
}

const ContactTable: React.FC<ContactTableProps> = ({
  contacts,
  filterText,
  showActiveUser,
  handleShow,
  setDeleteContactId,
}) => {
//   const { contacts } = useContacts() as ContactsContextType;
  const { favouriteContacts, removeFavourite, addFavourite } = useFavourites() as favoriteContactsContextType;

  const { regularContacts } = useRegularContacts() as regularContactsContextType;

  const [count, setCount] = useState(10);

  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);


  const showMoreItems = () => {
    setCount((prevValue) => prevValue + 5);
  };


  const [contactList, setContactList] = useState<Contact[]>(regularContacts);

  useEffect(() => {
    

    const filteredContacts = contacts.filter(
      (contact) =>{
        var phones: string='';
        contact.phones.forEach((val: Phone) => {
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
    setContactList(filteredContacts);
    
  }, [contacts, regularContacts, favouriteContacts, count, filterText, showLoadMore]);

  useEffect(()=>{
    
    if(contactList.length>count){
        setShowLoadMore(true)
    }else{
        setShowLoadMore(false)
    }
},[contactList])

  return (
    <div css={mainContentList} className='main-content-list'>
      <Table>
        <thead>
          <tr css={theadTr}>
            {/* <th className='text-center col-1'>+</th> */}
            <th className='text-secondary col-5'>Name</th>
            <th className='text-secondary col-5'>Add/Remove Favourite</th>
            <th className='text-center p-1 col-1'></th>
          </tr>
        </thead>
        
        <tbody css={tbody}>
        

          {contactList.length > 0 ? (
            
            contactList?.slice(0, count).map((contact, index) => {
                const isFavourite = favouriteContacts.some((val) => val.id === contact.id);
                
                return <ContactRow
                css={tbodyTrHover}
                key={index}
                contact={contact}
                showActiveUser={showActiveUser}
                isFavourite={isFavourite}
                removeFromFavourite={removeFavourite}
                addToFavourite={addFavourite}
                handleShow={handleShow}
                setDeleteContactId={setDeleteContactId}
              />
            })
          ) : (
            <tr>
              <td css={tbodyTd} colSpan={4} className='text-center text-secondary fw-bold'>
                No contacts found
              </td>
            </tr>
          )}
          {showLoadMore && (
        <tr css={tbodyTrHover}> 
            <td css={tbodyTd} colSpan={4} className='text-center fw-bold'>
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

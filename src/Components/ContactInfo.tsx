import React, { useEffect, useState } from 'react';
import ContactAvatar from './ContactAvatar';
import ContactButton from './ContactButton';

// import './contactinfo.scss';
import { Contact, Phone } from '../GraphQL/generated/graphql';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Modal } from 'react-bootstrap';


const buttonStyles = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  display: flex !important;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #ff8767, #fe67a3);
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
  color: white !important;
  border: none;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 20px;
  }

  &:hover {
    color: white;
  }
`;

const card = css`
  border: 0 !important;
  background-color: #f1f1f1 !important;
`;

const infoAvatar = css`
  height: 100px !important;
  width: 100px !important;
  font-size: 40px !important;

  @media screen and (max-width: 767px) {
    height: 70px !important;
    width: 70px !important;
    font-size: 30px !important;
  }
`;

const hrStyle = css`
  background-color: #c1c1c1 !important;
`;

const truncateString = css`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const fullName = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const phoneNumer = css`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #666;
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

  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    setContact({
      id: id,
      first_name: first_name,
      last_name: last_name,
      phones: phones,
      
    } as Contact);
  }, [id, first_name, last_name, phones]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [id, first_name, last_name, phones]);

  return (
    <div className='main-content-card'>
      <div className='container p-0'>
        <div className='row'>
          <div className='col-md-12'>
            <div css={card} className='card mb-3'>
              <div className='card-body'>
              {!showModal && (
                 <>
                <div className='d-flex flex-column align-items-center text-center'>
                  <ContactAvatar
                    name={contact.first_name + ' ' + contact.last_name}
                    css={infoAvatar}
                    className={'info-avatar'}
                  />
                  <div className='mt-3 w-100'>
                    <h4 css={fullName} className='m-auto fullname'>
                      {contact.first_name + ' ' + contact.last_name}
                    </h4>
                    
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Full Name</h6>
                  </div>
                  <div css={truncateString} className='col-8 truncate-string'>
                    {contact.first_name} {contact.last_name}
                  </div>
                </div>
                <hr css={hrStyle} />
                <div className='row'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Phone Numbers</h6>
                  </div>
                  <div   className='col-8'>
                  {phones.map((val: Phone) => {
                    return <div css={phoneNumer} >{val.number}</div>
                    ;
                })}
                  </div>
                </div>
                <hr css={hrStyle} />

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

                </>
              )}
                

                {/* Modal view */}
                {showModal && (
                  <Modal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    size='lg'
                    backdrop='static'
                    aria-labelledby='contained-modal-title-vcenter'
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Contact Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className='d-flex flex-column align-items-center text-center'>
                  <ContactAvatar
                    name={contact.first_name + ' ' + contact.last_name}
                    className={'info-avatar'}
                  />
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
                  <div css={truncateString} className='col-8 truncate-string'>
                    {contact.first_name} {contact.last_name}
                  </div>
                </div>
                <hr css={hrStyle} />
                <div className='row'>
                  <div className='col-4'>
                    <h6 className=' mb-0 text-secondary'>Phone Numbers</h6>
                  </div>

                  <div   className='col-8'>
                  {phones.map((val: Phone) => {
                    return <div css={phoneNumer}>{val.number}</div>
                    ;
                })}
                  </div>
                  
                </div>
                <hr css={hrStyle} />

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
                     
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        css={buttonStyles}
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

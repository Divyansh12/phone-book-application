import React, { useEffect, useState } from 'react';
import { Modal, Form, Row, Col, Button } from 'react-bootstrap';
// import './contactmodel.scss';
import { Contact, Phone } from '../GraphQL/generated/graphql';
import { useContacts } from '../Context/contacts';
import { ContactsContextType } from '../models/models';
import ErrorAlert from './errorAlert';



interface ContactModelProps {
  activeContact: Contact;
  isEdit: boolean;
  show: boolean;
  onHide: () => void;
  title: string;
  addContact: (contact: Contact) => void;
  editContact: (contact: Contact) => void;
}

const ContactModel: React.FC<ContactModelProps> = ({
  activeContact,
  isEdit,
  show,
  onHide,
  title,
  addContact,
  editContact,
}) => {
  const initialContact = {} as Contact;
  const [contact, setContact] = useState<Contact>(initialContact);
  const { contacts } = useContacts() as ContactsContextType ;
  
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    
    const newfunc = async (isEdit: boolean)=>{
    await isEdit ? setContact(activeContact) : setContact(initialContact)
    };
    newfunc(isEdit)
    
    const phones: string[]=[] 

    if(isEdit){
    activeContact?.phones.map((val: Phone) => {
              phones.push(val.number as string);
              
    })
    }
    isEdit ? setPhoneInputs (phones) : setPhoneInputs (['']);

  }, [activeContact, isEdit]);

  const [validated, setValidated] = useState(false);

  const [phone_inputs, setPhoneInputs] = useState<string[]>(['']);

  const handleInputChange = async (index: number, value: string) => {
    const newInputs = [...phone_inputs];
    newInputs[index] = value;
    await setPhoneInputs(newInputs);
    
  };

  const handleAddInput = () => {
    setPhoneInputs([...phone_inputs, '']);
  };

  const handleAlertClose =() =>{
    setError(null)
  };


  useEffect(()=>{
    // if(isEdit){
      var phones: Phone[]=[];
      phone_inputs.map((val: string) => {
        var phone_number={number: val} as Phone;
        phones.push(phone_number);
      })
    

    setContact({ ...contact, phones: phones } as Contact)
    // }
  },[phone_inputs])

  const handleFormSubmit = (event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    const isUnique = contacts.every(
      (item: Contact) => item.first_name !== contact.first_name || item.last_name !== contact.last_name
    );
    
    if (!isUnique && !isEdit) {
      setError('Contact Name must be unique.');
      

    }

    if (form.checkValidity() && (isUnique || isEdit) ) {
      
      isEdit ? editContact(contact) : addContact(contact);

      setContact(initialContact);
      onHide();
      setValidated(false);
    }

    setValidated(true);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      backdrop='static'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} >
          <Row className='mb-3'>

            <Form.Group as={Col} md='6' controlId='validationCustomFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                pattern='^\S[A-Za-z\s]{1,32}\S$'
                placeholder='Enter First Name'
                value={contact.first_name}
                onChange={(e) =>
                  setContact({ ...contact, first_name: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid first name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustomLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                pattern='^\S[A-Za-z\s]{1,32}\S$'
                placeholder='Enter last name'
                value={contact.last_name}
                onChange={(e) =>
                  setContact({ ...contact, last_name: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please enter a valid last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          {phone_inputs.map((input, index) => (

          <Row className='mb-3' key={index}>
            
            <Form.Group as={Col} md='6' controlId='validationPhoneNumber'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                pattern='^(7|8|9)\d{9}$'
                placeholder='Enter Phone Number'
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        ))}
        <Button onClick={handleAddInput}>Add Phone</Button>


        
          <Modal.Footer>
            <Button variant='secondary' onClick={onHide}>
              Cancel
            </Button>
            <Button  onClick={(e)=>handleFormSubmit(e)}>Save</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
      {error && <ErrorAlert message={error} onClose={handleAlertClose} />}
    </Modal>
  );
};

export default ContactModel;

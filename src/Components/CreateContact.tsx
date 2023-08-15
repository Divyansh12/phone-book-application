import React, { useState } from "react";
// import { CREATE_CONTACT_MUTATION } from "../GraphQL/Mutations/mutation";
// import { useMutation } from "@apollo/client";
import { Contact, Phone_Insert_Input, useAddContactWithPhonesMutation } from "../GraphQL/generated/graphql";
import { useContacts } from "../Context/contacts";
import { ContactsContextType } from "../models/models";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [phone_inputs, setPhoneInputs] = useState<string[]>(['']);

  const handleInputChange = (index: number, value: string) => {
    console.log(phone_inputs)
    const newInputs = [...phone_inputs];
    newInputs[index] = value;
    setPhoneInputs(newInputs);
  };

  const handleAddInput = () => {
    setPhoneInputs([...phone_inputs, '']);
  };


  const {  addContact } = useContacts() as ContactsContextType 

//   const [AddContactWithPhones, { error }] = useMutation(CREATE_CONTACT_MUTATION);
const [AddContactWithPhones, { error }] = useAddContactWithPhonesMutation()

 const  createContact =  async () => {
    var phones: Phone_Insert_Input[]=[];
    phone_inputs.map((val: string) => {
        var phone_number={number: val} as Phone_Insert_Input;
        phones.push(phone_number);
      })
    const response = await AddContactWithPhones({
      variables: {
        first_name: firstName,
        last_name: lastName,
        phones: phones
      },
    });

    var new_contact=response.data?.insert_contact?.returning[0] as Contact
    addContact(new_contact)
    // console.log(response.data?.insert_contact?.returning[0] as Contact)
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
       <div>
      {phone_inputs.map((input, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="phone number"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleAddInput}>Add Phone</button>
    </div>
      {/* <input
        type="text"
        placeholder="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      /> */}
      
      <button onClick={createContact}> Create Contact</button>
    </div>
  );
}

export default Form;
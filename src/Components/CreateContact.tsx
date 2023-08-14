import React, { useState } from "react";
// import { CREATE_CONTACT_MUTATION } from "../GraphQL/Mutations/mutation";
// import { useMutation } from "@apollo/client";
import { Phone_Insert_Input, useAddContactWithPhonesMutation } from "../GraphQL/generated/graphql";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

//   const [AddContactWithPhones, { error }] = useMutation(CREATE_CONTACT_MUTATION);
const [AddContactWithPhones, { error }] = useAddContactWithPhonesMutation()

  const addUser = () => {
    var phones: Phone_Insert_Input[] =[]
    var phone_number={number: phone} as Phone_Insert_Input
    phones.push(phone_number)
    AddContactWithPhones({
      variables: {
        first_name: firstName,
        last_name: lastName,
        phones: phones
      },
    });

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
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      
      <button onClick={addUser}> Create Contact</button>
    </div>
  );
}

export default Form;
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactsForm";
import Contacts from "./Contacts";
import axios from "axios";

function ContactsApp(props) {
  const [contacts, setContacts] = useState([]);
  props.callBack('#ECE9E0');
  useEffect(() => {
    axios
      .get("https://random-acts0519.herokuapp.com/api/contacts", { headers: {Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMDIsInVzZXJuYW1lIjoianRlc3QiLCJpYXQiOjE1NzE3MTYzNzYsImV4cCI6MTU3MTgwMjc3Nn0.is711-HYibx3pOUV0yzthL7VtG7j-hkT8Z3LFzvp1S4"} })
      .then(response => {
        const contactList = response.data;
        console.log(response);
        setContacts(contactList);
      })
      .catch(error => {
        console.log("No Contacts", error);
      });
  }, []);

  // Adding Contacts
  const addContact = contact => {
    const newContact = {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
      group: contact.group,
      notes: contact.notes,
      user_id: contact.user_id
    };
    setContacts([...contacts, newContact]);
  };

  // Deleting Contacts
  const delContact = id => {
    const newArr = contacts.filter(contact => {
      return contact.user_id !== id;
    });
    setContacts(newArr);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm addContactFn={addContact} />
      <Contacts contactList={contacts} delContactFn={delContact} />
    </div>
  );
}

export default ContactsApp;

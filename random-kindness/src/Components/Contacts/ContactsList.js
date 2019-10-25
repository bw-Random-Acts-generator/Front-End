import React, { useState, useEffect } from "react";
import ContactForm from "./ContactsForm";
import Contacts from "./Contacts";
import axios from "axios";
import "./Contacts.css";

function ContactsApp() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://random-acts0519.herokuapp.com/api/contacts", { headers: {Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMDIsInVzZXJuYW1lIjoianRlc3QiLCJpYXQiOjE1NzE5Njc0MzIsImV4cCI6MTU3MjA1MzgzMn0.WU3wkLaKBALBXB4f0eTZjp7NwnPKdHa3ZMdidGJN4xY"} })
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
    <div className="container">
      <h1 className="title">CONTACTS</h1>
      <div className="body">
      <div className="contact-list">
      <Contacts contactList={contacts} delContactFn={delContact} />
      </div>
      <div className="contact-form">
      <ContactForm addContactFn={addContact} />
      </div>
      </div>
    </div>
  );
}

export default ContactsApp;

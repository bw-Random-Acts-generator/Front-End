import React, { useState } from "react";
import ContactForm from "./ContactsForm";
import Contacts from "./Contacts";



function ContactsApp() {

    const [contacts, setContacts] = useState([
        {
            name: "Sample Dude",
            phone: "1112223333",
            email: "test@gmail.com",
            address: "456 Street",
            group: "friends",
            notes: "loves help",
            user_id: 1
        }
    ]);

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


    return(
        <div>
            <h1>Contacts</h1>
            <ContactForm  addContactFn={addContact}/>
            <Contacts contactList={contacts} delContactFn={delContact}/>
        </div>
    )
}


export default ContactsApp;
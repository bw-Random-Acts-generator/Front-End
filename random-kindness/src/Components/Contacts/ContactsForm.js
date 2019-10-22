import React, { useState } from "react";

const ContactForm = props => {
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    group: "",
    notes: ""
  });

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addContactFn(contact);
    setContact({
      name: "",
      phone: "",
      email: "",
      address: "",
      group: "",
      notes: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contacts</h2>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={contact.name}
        name="name"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        value={contact.phone}
        name="phone"
        type="text"
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={contact.email}
        name="email"
        type="email"
        onChange={handleChange}
      />

      <label htmlFor="address">Address</label>
      <input
        id="address"
        value={contact.address}
        name="address"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="group">Group</label>
      <input
        id="group"
        value={contact.group}
        name="group"
        type="text"
        onChange={handleChange}
      />
      <label htmlFor="notes">Notes</label>
      <input
        id="notes"
        value={contact.notes}
        name="notes"
        type="text area"
        onChange={handleChange}
      />

      <button type="submit">Add Contact</button>

    </form>
  );
};

export default ContactForm;

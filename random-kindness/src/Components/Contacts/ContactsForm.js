import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Contacts.css";

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
    <Form onSubmit={handleSubmit}>
      
        <h2>Add Contacts</h2>
        <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={contact.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={contact.phone}
          name="phone"
          type="text"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={contact.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={contact.address}
          name="address"
          type="text"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="group">Group</Label>
        <Input
          id="group"
          value={contact.group}
          name="group"
          type="text"
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="notes">Notes</Label>
        <Input
          id="notes"
          value={contact.notes}
          name="notes"
          type="textarea"
          onChange={handleChange}
        />
        </FormGroup>
        <Button className="custom-btn" type="submit">Add Contact</Button>
     
    </Form>
  );
};

export default ContactForm;

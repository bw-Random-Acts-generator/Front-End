import React from "react";

const SoloContact = props => {
  return (
    <div>
      {props.contactList.map(contact => {
        return (
          <div key={contact.user_id}>
            <h2>{contact.name}</h2>
            <h3>{contact.phone}</h3>
            <h3>{contact.email}</h3>
            <h3>{contact.address}</h3>
            <h3>{contact.group}</h3>
            <p>{contact.notes}</p>
            <button onClick={() => props.delContactFn(contact.user_id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default SoloContact;

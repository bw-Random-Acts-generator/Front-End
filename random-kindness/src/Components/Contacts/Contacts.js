import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "./Contacts.css"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SoloContact = props => {

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      {props.contactList.map(contact => {
        return (
          <div key={contact.user_id}>
            <Button
              className="contacts-name"
              onClick={toggle}
            >
              {contact.name}
            </Button>
            <Collapse isOpen={collapse}>
              <Card>
                <CardBody className="contacts-card">
                  <div>
                  <h3>{contact.phone}</h3>
                  <h3>{contact.email}</h3>
                  <h3>{contact.address}</h3>
                  <h3>{contact.group}</h3>
                  <p>{contact.notes}</p>
                  </div>
                  <button 
                  className="card-btn" 
                  onClick={() => props.delContactFn(contact.user_id)}>
                  <FontAwesomeIcon icon={faTimesCircle} />
                  </button>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};

export default SoloContact;

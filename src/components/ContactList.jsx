import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../contactsSlice'; 

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className="contact-list">
      {filteredContacts.map(contact => (
        <li key={contact.id} className="contact-list__item">
          <span className="contact-list__name">{contact.name}: </span>
          <span>{contact.number}</span>
          <button
            onClick={() => handleDelete(contact.id)}
            className="contact-list__button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

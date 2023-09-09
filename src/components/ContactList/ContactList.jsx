import React from 'react';
import { Button, Item, List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'components/redux/selectors';
import { deleteContact } from 'components/services/Api';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const handelDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  const visibleContacts = getVisibleContacts();
  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.phone}

          <Button
            type="button"
            name="delete"
            onClick={() => handelDeleteContact(contact.id)}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

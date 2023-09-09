import { Container, SubTitle, Title, Wrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from './redux/selectors';
import { fetchContacts } from './services/Api';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};

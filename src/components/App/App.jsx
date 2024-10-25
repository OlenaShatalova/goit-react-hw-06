import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

import css from './App.module.css';

const INIT_VALUE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? INIT_VALUE;
  });
  const [search, setSearch] = useState('');

  const addContact = newCont => {
    setContact(prevCont => {
      return [...prevCont, newCont];
    });
  };

  const deleteContact = contactId => {
    setContact(prevCont => {
      return prevCont.filter(contact => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(search.toLowerCase()) // ФІЛЬТР КОНТАКТІВ
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.form_container}>
      <h1 className={css.main_title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contactsList={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;

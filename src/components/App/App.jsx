import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactListItem } from 'components/ContactListItem/ContactactListItem';
import { Filter } from 'components/Filter/Filter';
import React, { Component } from 'react';
import { FormTitle, FormSubtitle, FormWrapper } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: newContacts };
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return filtredContacts;
  };

  cleanFilter = () => {
    this.setState({
      filter: '',
    });
  };

  render() {
    const contacts = this.filteredContacts();
    return (
      <FormWrapper>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm
          contacts={this.state.contacts}
          onSubmit={this.addContact}
        />

        <FormSubtitle>Contacts</FormSubtitle>
        <Filter
          filter={this.state.filter}
          handleChange={this.handleChange}
          cleanFilter={this.cleanFilter}
        />
        <ContactList>
          <ContactListItem
            contacts={contacts}
            removeContact={this.removeContact}
          />
        </ContactList>
      </FormWrapper>
    );
  }
}
export default App;

import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import React, { Component } from 'react';

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

  makeFilterContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterNormalize = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filterNormalize)
    );
    return filtredContacts;
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  formSubmitHadler = data => {
    console.log(data);
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHadler}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

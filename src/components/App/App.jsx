import ContactForm from 'components/ContactForm/ContactForm';
import React, { Component } from 'react';

class App extends Component {
  state = {};
  FormSubmitHadler = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.FormSubmitHadler} />
        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;

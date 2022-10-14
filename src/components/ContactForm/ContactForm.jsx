import { Component } from 'react';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  HandleSubmit = e => {
    e.preventDefault();
    this.reset();
    // this.props.onSubmit(this.state);
  };

  HandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  Reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.HandleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={this.HandleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="Number">Number</label>
        <input
          onChange={this.HandleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;

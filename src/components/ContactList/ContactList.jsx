// import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onChange }) => {
  return (
    <>
      <input
        onChange={onChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <ul>
        {contacts.map(({ name, number }, i) => {
          return (
            <li key={i}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </>
  );
};

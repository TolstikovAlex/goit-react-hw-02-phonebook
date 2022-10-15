import React from 'react';
import PropTypes from 'prop-types';
import { DeleteBtn, ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ contacts, removeContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <DeleteBtn type="button" onClick={() => removeContact(id)}>
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};

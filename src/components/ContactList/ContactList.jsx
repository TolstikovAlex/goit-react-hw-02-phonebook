import React from 'react';
import PropTypes from 'prop-types';
import { FormList } from './ContactList.styled';

export const ContactList = ({ children }) => {
  return <FormList>{children}</FormList>;
};
ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

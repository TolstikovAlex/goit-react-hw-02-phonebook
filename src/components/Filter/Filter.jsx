import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FilterField, FilterLabel } from './Filter.styled';

export const Filter = ({ filter, handleChange, cleanFilter }) => {
  const filterId = nanoid();

  return (
    <div>
      <FilterLabel htmlFor={filterId}>
        Find contacts by name
        <FilterField
          id={filterId}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          onBlur={cleanFilter}
        />
      </FilterLabel>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  cleanFilter: PropTypes.func.isRequired,
};

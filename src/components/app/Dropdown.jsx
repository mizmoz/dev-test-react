import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ items }) {
  return (
    <select>
        {items.map((i) => {
          return (<option key={i.code} value={i.code}>{i.name}</option>);
        })}
    </select>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array,
};

Dropdown.defaultProps = {
  items: [],
};

export default Dropdown;

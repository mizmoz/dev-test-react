import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ items, onChange }) {
  return (
    <select onChange={(evt) => onChange(evt.target.value)}>
        {items.map((item) => {
          const { isSelected } = item; 
          const renderedPop = (item.hasOwnProperty('population')) ? 
            ` - pop: ${item.population}` : '';

          return (
            <option
              key={item.code}
              value={item.code}
              selected={isSelected}
            >
              {item.name}
              {renderedPop}
            </option>
          );
        })}
    </select>
  );
}

Dropdown.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  items: [],
  onChange: () => {},
};

export default Dropdown;

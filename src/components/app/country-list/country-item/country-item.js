import React, { Component } from 'react';
import './style.css';

const CountryItem = (props) => {
  return (
    <li
        className='box-country-item'
          >
          <button className="country-button">
            {props.item.name}
            <input
              type="text"
              pattern="[0-9]*"
              placeholder={-1}
              data-id={props.item.name}
              value={props.item.value}
              onChange={(e) => {
                const v = e.currentTarget.value;
                if (parseInt(v)) {
                  e.currentTarget.value = parseInt(v);
                  props.onChange(e);
                } else {
                  e.currentTarget.value = '';
                  props.onChange(e)
                }
              }}
            />
          </button>
      </li>
  )
  const updateNumber = (d) => {
  console.log('ciao', d);
  }
}

export default CountryItem;

import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePopulation } from '@store/modules/countries';

const Form = ({ countries, update }) => {
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');

  const { byCode, allCodes } = countries;

  const handleCountryChange = (code) => {
    setCountry(code);
    setPopulation(byCode[code].population);
  };

  const handlePopulationChange = (value) => {
    const parsedValue = Number.parseInt(value, 10);
    setPopulation(Number.isNaN(parsedValue) ? 0 : parsedValue);
  };

  useEffect(() => {
    if (!country && allCodes[0]) handleCountryChange(allCodes[0]);
  });

  return (
    <Fragment>
      <select onChange={e => handleCountryChange(e.target.value)}>
        {allCodes.map(code => (
          <option key={code} value={code}>{byCode[code].name}</option>
        ))}
      </select>
      <input name="population" value={population} onChange={e => handlePopulationChange(e.target.value)} onClick={e => e.target.select()} />
      <button
        type="submit"
        onClick={() => update({ country, population })}
      >
        Update
      </button>
    </Fragment>
  );
};

Form.propTypes = {
  countries: PropTypes.shape({
    byCode: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
    allCodes: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  update: PropTypes.func.isRequired,
};

const Container = connect(
  state => ({
    countries: state.countries,
  }), {
    update: updatePopulation,
  },
)(Form);

export { Form, Container as default };

import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPopulationRecord } from '@store/modules/countries';
import Button from './Button';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.marginHalf} 0;
  &:first-child {
    flex: 1;
  }
  min-width: 75px;
`;

const Form = ({ countries, createRecord }) => {
  const [country, setCountry] = useState({});
  const [population, setPopulation] = useState('');

  const { byCode, allCodes } = countries;

  const handleCountryChange = (code) => {
    const { name } = byCode[code];
    setCountry({ code, name });
    setPopulation('');
  };

  const handlePopulationChange = (value) => {
    const parsedValue = Number.parseInt(value, 10);
    setPopulation(Number.isNaN(parsedValue) ? 0 : parsedValue);
  };

  const handleCreateRecord = () => {
    if (!Number.isNaN(Number.parseInt(population, 10))) {
      createRecord({ country, population });
      setPopulation('');
    }
  };

  useEffect(() => {
    if (!country.code && allCodes[0]) handleCountryChange(allCodes[0]);
  });

  return (
    <Fragment>
      <Row>
        <Cell>
          <select onChange={e => handleCountryChange(e.target.value)}>
            {allCodes.map(code => (
              <option key={code} value={code}>{byCode[code].name}</option>
            ))}
          </select>
        </Cell>
        <Cell>
          <input
            name="population"
            value={population}
            onChange={e => handlePopulationChange(e.target.value)}
            onClick={e => e.target.select()}
          />
        </Cell>
        <Cell>{' '}</Cell>
        <Cell>
          <Button
            label="Submit"
            type="submit"
            onClick={() => handleCreateRecord()}
          />
        </Cell>
      </Row>
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
  createRecord: PropTypes.func.isRequired,
};

const Container = connect(
  state => ({
    countries: state.countries,
  }), {
    createRecord: createPopulationRecord,
  },
)(Form);

export { Form, Container as default };

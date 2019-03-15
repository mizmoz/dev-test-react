import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createPopulationRecord, deletePopulationRecord } from '@store/modules/countries';
import Button from './Button';

const Cell = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid;
  padding: ${props => props.theme.marginHalf} 0;
  min-width: 75px;
  &:first-child {
    flex: 1;
  }
`;

const Record = ({
  population,
  code,
  name,
  createRecord,
  deleteRecord,
}) => {
  const [initialPopulation, setInitialPopulation] = useState(population);
  const [populationInput, setPopulationInput] = useState(population);


  const handlePopulationChange = (value) => {
    const parsedValue = Number.parseInt(value, 10);
    setPopulationInput(Number.isNaN(parsedValue) ? 0 : parsedValue);
  };

  const handleCreateRecord = () => {
    if (!Number.isNaN(Number.parseInt(populationInput, 10))) {
      createRecord({ country: { code, name }, population: populationInput });
    }
  };

  useEffect(() => {
    if (population !== initialPopulation) {
      setInitialPopulation(population);
      setPopulationInput(population);
    }
  });

  return (
    <Fragment>
      <Cell>{name}</Cell>
      <Cell>
        <input
          name="population"
          value={populationInput}
          onChange={e => handlePopulationChange(e.target.value)}
          onClick={e => e.target.select()}
        />
      </Cell>
      <Cell>
        <Button
          label="Update"
          onClick={() => handleCreateRecord()}
        />
      </Cell>
      <Cell>
        <Button
          label="Delete"
          onClick={() => deleteRecord({ code })}
        />
      </Cell>
    </Fragment>
  );
};

Record.propTypes = {
  population: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createRecord: PropTypes.func.isRequired,
  deleteRecord: PropTypes.func.isRequired,
};


export default connect(null, {
  createRecord: createPopulationRecord,
  deleteRecord: deletePopulationRecord,
})(Record);

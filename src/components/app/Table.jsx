import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectRecords } from '@store/modules/countries';
import Record from './Record';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Table = ({ records }) => (
  <Fragment>
    {records.length ? records.map(country => (
      <Row key={country.code}>
        <Record {...country} />
      </Row>
    )) : (
      <div>No population records to display.</div>
    )}
  </Fragment>
);

Table.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.number,
  })).isRequired,
};

export default connect(
  state => ({
    records: selectRecords(state),
  }),
)(Table);

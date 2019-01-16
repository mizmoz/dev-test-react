import React from 'react';
import { connect } from 'react-redux';
import { fetchCountryData } from '../../store/actions';
import PopulationListContainer from './PopulationList';
import styled from 'styled-components';
import PopulationEditContainer from './PopulationEdit';
import H2 from './H2';

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  flex: 50%;
  padding: 5px;
  margin: 5px;
`;

export class App extends React.Component {
  componentDidMount() {
    const { dispatch, fetchCountryData } = this.props;
    dispatch(fetchCountryData());
  }

  render() {
    const { countries, hasError } = this.props;
    return (
      <Row>
        <Column>
          {hasError && (
            <H2>
              Error Occured!! Please refresh the page by CTRL + F5 :: Until you
              see a country drop down!!{' '}
            </H2>
          )}
          {!hasError && <PopulationEditContainer countries={countries} />}
        </Column>
        <Column>{!hasError && <PopulationListContainer />}</Column>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    hasError: state.hasError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountryData: fetchCountryData,
    dispatch
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

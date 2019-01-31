import React, { Component } from 'react';
import { connect } from 'react-redux'
import apiCountry from '../../api/country';
import { fetchCountriesComplete, fetchCountriesError } from '../../store/actions'
import H1 from './H1';
import H2 from './H2';
import Form from './Form';

class Wrapper extends React.Component {
  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const { loading, error } = this.props;
    return (
      <>
        <H1>
          List of countries sorted by population:
        </H1>
        {loading ? (
          <H2>Loading...</H2>
        ) : error ? (
          <H2>Connection error</H2>
        ) : (
              <Form />
            )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error,
})

const mapDispatchToProps = dispatch => ({
  fetchCountries: () => apiCountry()
    .then(countries => dispatch(fetchCountriesComplete(countries)))
    .catch(reason => dispatch(fetchCountriesError(reason))),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)
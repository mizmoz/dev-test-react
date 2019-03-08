import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import H1 from '../shared/H1';
import CountryPopulationForm from '../country-population-form';
import CountryList from '../country-list';
import { getCountriesList, getErrors } from '../../store/selectors';
import { loadCountries } from '../../store/actions';

class SortedCountries extends Component {
  static propTypes = {
    errors: PropTypes.shape({
      type: PropTypes.string,
      error: PropTypes.object
    }),
    countries: PropTypes.array.isRequired,
    loadCountries: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      countriesWithPopulation: []
    };
  }

  addCountryToList = (countryName, population) => {
    /**
     * Filters the existing state to allow you to update a population
     * as oppose to duplicating the entry
     */
    this.setState(prevState => ({
      countriesWithPopulation: [
        ...prevState.countriesWithPopulation.filter(
          country => country.name != countryName
        ),
        { name: countryName, population: population }
      ]
    }));
  };

  removeCountryFromList = e => {
    e.preventDefault();
    const countryToRemove = e.target.value;

    if (countryToRemove) {
      this.setState(prevState => ({
        countriesWithPopulation: [
          ...prevState.countriesWithPopulation.filter(
            country => country.name != countryToRemove
          )
        ]
      }));
    }
  };

  renderErrror = () => {
    //TODO - would make this a render a modal with a "click to refresh" button
    return (
      <>
        <h1>{'Oops, something went wrong!'}</h1>
        <h1>{' please refresh the page.'}</h1>
      </>
    );
  };

  componentDidMount() {
    this.props.loadCountries();
  }

  render() {
    const { countries, errors } = this.props;

    return countries.length ? (
      <>
        <H1>{'Countries by population'}</H1>
        <CountryPopulationForm
          countries={countries}
          addCountryToList={this.addCountryToList}
        />
        <CountryList
          countriesWithPop={this.state.countriesWithPopulation}
          deleteHandler={this.removeCountryFromList}
        />
      </>
    ) : (
      (errors.type && this.renderErrror()) || <h1>Loading...</h1>
    );
  }
}

const mapStateToProps = state => ({
  countries: getCountriesList(state),
  errors: getErrors(state)
});

export default connect(
  mapStateToProps,
  { loadCountries }
)(SortedCountries);

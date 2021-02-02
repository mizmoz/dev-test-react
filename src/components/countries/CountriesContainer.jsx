import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import { ErrorContainer, TryAgain } from './Styles';
import { fetchCountries } from '../../actions/country';

import CountriesTable from './CountriesTable';
import CountryForm from './CountryForm';

const CountriesContainer = ({ countries, getCountries, error, isLoading }) => {
  const [countriesWithPopulation, setCountriesWithPopulation] = useState([]);
  const [entryError, setEntryError] = useState(null);
  const [forUpdate, setForUpdate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCountries();
  }, []);

  function onClickTryAgain(event) {
    event.preventDefault();
    getCountries();
  }

  function handleAddCountry(newCountry, successCallback = null) {
    const exist = countriesWithPopulation.find((country) => country.code === newCountry.code)

    // Don't continue if already added
    if (exist) {
      setEntryError('Already Exists');
      return;
    }

    setCountriesWithPopulation([...countriesWithPopulation, newCountry]);
    setEntryError('');

    // Run callback
    if (successCallback) successCallback();
  }

  function handleUpdate(selectedCountry, successCallback = null) {
    const filtered = countriesWithPopulation.filter((country) => country.code !== selectedCountry.code)
    setCountriesWithPopulation([...filtered, selectedCountry])
    setForUpdate(null);
    setEntryError(null)

    // Run callback
    if (successCallback) successCallback();
  }

  function handleDelete(selectedCountry) {
    const filtered = countriesWithPopulation.filter((country) => country.code !== selectedCountry.code)
    setCountriesWithPopulation([...filtered])
  }

  function renderError() {
    if (!error && !entryError) return null;
    
    if (error) {
      return <ErrorContainer>
        <div>Ooops! Problem encountered loading countries. Click try again!</div>
        <TryAgain onClick={onClickTryAgain}>TRY AGAIN!</TryAgain>
      </ErrorContainer>

    } else if(entryError) {
      return <ErrorContainer>
        <div>Ooops! Looks like you've already added this country. Either delete existing or update it.</div>
      </ErrorContainer>

    }
  }

  return (
    <>
      {renderError()}
      <CountryForm
        countries={countries}
        isFetchingCountries={isLoading}
        addCountry={handleAddCountry}
        handleUpdate={handleUpdate}
        forUpdate={forUpdate}
        setSearchTerm={setSearchTerm}
      />
      <CountriesTable
        countries={countriesWithPopulation}
        setForUpdate={setForUpdate}
        deleteCountry={handleDelete}
        searchTerm={searchTerm}
      />
    </>
  )
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    error: state.error,
    isLoading: state.isLoading
  }
}

// Better to use thunk middleware for this.
// But for the simplicity of the test. I've
// decided to just dispatch here.
const mapDispatchToProps = dispatch => {
  return {
    getCountries: () => fetchCountries(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
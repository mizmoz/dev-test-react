
import React from 'react';
import PropTypes from 'prop-types';
import Ul from './Ul';
import Li from './Li';

const CountryList = (props) => {

  // not the most efficient performance wise but does mean we can animate the order changes instead of rerendering the whole list...
  const sortedCountries = Object.values(props.countries).sort( (a,b) => {
    let populationA = (!a.population) ? 0 : a.population;
    let populationB = (!b.population) ? 0 : b.population;
    return (populationB - populationA)
   });
  const countriesList = Object.values(props.countries);
  const getOrder = (target, sortedList) => {
    return sortedList.map((country) => {
      return country.code;
    }).indexOf(target);
  }

  return (
    <Ul listCount={countriesList.length}>
      {countriesList.map((country, i)=> { 
        return (<Li order={getOrder(country.code, sortedCountries)} key={`country-list_${country.code}_${i}`}>{country.name} {country.population ? `(${country.population})`: ''}</Li>);
      })}
    </Ul>
  )
}

CountryList.propTypes = {
  countries: PropTypes.object
};

CountryList.defaultProps = {
  countries: {}
};

export default CountryList;

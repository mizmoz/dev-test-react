
import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const CountrySelect = (props) => {
  return (
    <Select defaultValue='default_value' onChange={(evnt)=>props.selectCountry(evnt.target.value)}>
      <option disabled value='default_value'> -- pick a country -- </option>
      {Object.keys(props.countries).map((key, i)=> { 
        let country = props.countries[key];
        return (<option key={country.code + "i"} value={country.code}>{country.name} {country.population ? `(${country.population})`: ''}</option>);
      })}
    </Select>
  )
}

CountrySelect.propTypes = {
  countries: PropTypes.object,
  selectCountry: PropTypes.func
};

CountrySelect.defaultProps = {
  countries: {},
  selectCountry: function(){}
};

export default CountrySelect;

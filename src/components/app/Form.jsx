import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setActiveCountryCode, setActiveCountryPopulation, setPopulation } from '../../store/actions'
import Div from './Div';
import Button from './Button';
import Label from './Label';
import Select from './Select';
import Input from './Input';

const Form = ({ activeCountryCode, activeCountryPopulation, countries, onCountryChange, onPopulationChange, onPopulationUpdate, onPopulationDelete }) => (
  <form>
    <Div>
      <Label htmlFor="selectCountry">Select country:</Label>
      <Select id="selectCountry" onChange={onCountryChange}>
        {countries.map(country =>
          <option key={country.code} value={country.code}>{country.name} {country.population ? (' - ' + country.population) : ''}</option>
        )}
      </Select>
    </Div>
    <Div>
      <Label htmlFor="inputPopulation">Population:</Label>
      <Input type="number" id="inputPopulation"
        value={activeCountryPopulation}
        onChange={onPopulationChange}
      />
    </Div>
    <Div>
      <Button onClick={(event) => onPopulationUpdate(event, activeCountryCode, activeCountryPopulation)}>Update population</Button>
      <Button onClick={(event) => onPopulationDelete(event, activeCountryCode)}>Delete population</Button>
    </Div>
  </form>
)

const mapStateToProps = state => ({
  countries: state.countries,
  activeCountryCode: state.activeCountryCode,
  activeCountryPopulation: state.activeCountryPopulation,
})

const mapDispatchToProps = dispatch => ({
  onCountryChange: event => dispatch(setActiveCountryCode(event.target.value)),
  onPopulationChange: event => dispatch(setActiveCountryPopulation(parseInt(event.target.value))),
  onPopulationUpdate: (event, country, population) => {
    event.preventDefault();
    dispatch(setPopulation(country, population))
  },
  onPopulationDelete: (event, country) => {
    event.preventDefault();
    dispatch(setPopulation(country))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
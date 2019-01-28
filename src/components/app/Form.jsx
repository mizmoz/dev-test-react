import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectCountry, setPopulation } from '../../store/actions'
import Div from './Div';
import Button from './Button';
import Label from './Label';
import Select from './Select';
import Input from './Input';

// const getSelectedCountry = (countries, code) => {
//   var country = countries.find(country => {
//     return country.code == code;
//   });
//   return country;
// }

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      population: ''
    }
  }

  onPopulationChange = (event) => {
    this.setState({
      population: event.target.value
    })
  }

  // componentWillUpdate() {
  //   debugger;
  // }

  render() {
    const { countries, countrySelected, populationSelected, onCountryChange, onUpdatePopulation, onDeletePopulation } = this.props;
    const { population } = this.state;
    return (
      <form>
        Country selected: {countrySelected} <br />
        <Div>
          <Label htmlFor="selectCountry">Select country:</Label>
          <Select id="selectCountry" onChange={onCountryChange}>
            {countries.map(country =>
              <option key={country.code} value={country.code}>{country.name} {country.population ? country.population : ''}</option>
            )}
          </Select>
        </Div>
        <Div>
          <Label htmlFor="inputPopulation">Population:</Label>
          <Input type="number" id="inputPopulation"
            value={population}
            onChange={this.onPopulationChange}
          />
        </Div>
        <Div>
          <Button onClick={(event) => onUpdatePopulation(event, countrySelected, population)}>Update population</Button>
          <Button onClick={(event) => onDeletePopulation(event, countrySelected)}>Delete population</Button>
        </Div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries,
  countrySelected: state.countrySelected
})

const mapDispatchToProps = dispatch => ({
  onCountryChange: event => dispatch(selectCountry(event.target.value)),
  onUpdatePopulation: (event, country, population) => {
    event.preventDefault();
    dispatch(setPopulation(country, population))
  },
  onDeletePopulation: (event, country) => {
    event.preventDefault();
    dispatch(setPopulation(country))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
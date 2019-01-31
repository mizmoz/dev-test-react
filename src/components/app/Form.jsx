import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectCountry, setPopulation } from '../../store/actions'
import Div from './Div';
import Button from './Button';
import Label from './Label';
import Select from './Select';
import Input from './Input';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      population: ''
    }
  }

  onPopulationChange = (event) => {
    this.setState({ population: parseInt(event.target.value) })
  }

  onCountryChange = (event) => {
    const country = this.props.countries.find(country => country.code === event.target.value);
    this.setState({
      country: country.code,
      population: country.population ? country.population : ''
    })
  }

  onPopulationUpdate = (event) => {
    event.preventDefault();
    this.props.onPopulationUpdate(this.state.country, this.state.population);
  }

  onPopulationDelete = (event) => {
    event.preventDefault();
    this.setState({ population: '' });
    this.props.onPopulationDelete(this.state.country);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.countries.length && this.props.countries.length) {
      this.setState({ country: this.props.countries[0].code });
    }
  }

  render() {
    const { countries } = this.props;
    const { population } = this.state;
    return (
      <form>
        <Div>
          <Label htmlFor="selectCountry">Select country:</Label>
          <Select id="selectCountry" onChange={this.onCountryChange}>
            {countries.map(country =>
              <option key={country.code} value={country.code}>{country.name} {country.population ? (' - ' + country.population) : ''}</option>
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
          <Button onClick={this.onPopulationUpdate}>Update population</Button>
          <Button onClick={this.onPopulationDelete}>Delete population</Button>
        </Div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries
})

const mapDispatchToProps = dispatch => ({

  onCountryChange: event => dispatch(selectCountry(event.target.value)),
  onPopulationUpdate: (country, population) => dispatch(setPopulation(country, population)),
  onPopulationDelete: (country) => dispatch(setPopulation(country)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
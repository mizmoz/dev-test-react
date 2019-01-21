
import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';
import Button from './Button';

const PopulationFormStyled = styled.form`
  background: ${style('color.component')};
  padding: ${style('paddingSmall')};
`;

const mapStateToProps = state => {
  return { countries: state.countries };
};

class PopulationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      population: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCountrySelect = this.handleCountrySelect.bind(this);
    this.handleSetPopulation = this.handleSetPopulation.bind(this);
  }

  handleCountrySelect(event) {
    this.setState({ country: event.target.value });
  }

  handleSetPopulation(event) {
    this.setState({ population: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render () {
    const { countries } = this.props;

    return (
      <PopulationFormStyled onSubmit={this.handleSubmit}>
        <label htmlFor="country-select">Country:</label>
        <select
          id="country-select"
          value={this.state.country}
          onChange={this.handleCountrySelect}
          required={true}
        >
          <option value=''>Please select</option>
          {countries.map(country  => (
            <option key={country.code} value={country.code} >
              {country.name}
            </option>
          ))}
        </select>
  
        <label htmlFor="population-value">Population:</label>
        <input
          id="population-value"
          type="text"
          value={this.state.population}
          onChange={this.handleSetPopulation}
          required={true}
        />
        <Button label="Save" type="submit"/>
      </PopulationFormStyled>
    );
  }
}

PopulationForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps)(PopulationForm);

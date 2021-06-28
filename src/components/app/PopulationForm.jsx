
import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';
import { storeCountryPopulation } from "../../actions/index";
import Button from './Button';

const PopulationFormStyled = styled.form`
  background: ${style('color.component')};
  font-family: ${style('baseFontFamily')};
  padding: ${style('paddingSmall')};
`;

const LabelStyled = styled.label`
  margin-right: ${style('marginTiny')};
`;

const DropdownStyled = styled.select`
  font-family: inherit;
  font-size: inherit;
  margin-right: ${style('margin')};
`;

const InputStyled = styled.input`
  font-family: inherit;
  font-size: inherit;
  margin-right: ${style('margin')};
`;

const mapDispatchToProps = dispatch => ({
  storeCountryPopulation: (selectedCountry, newPopulation) => {
    dispatch(storeCountryPopulation(selectedCountry, newPopulation));
  },
});

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
    this.props.storeCountryPopulation(this.state.country, this.state.population);
    this.setState({
      country: '',
      population: '',
    });
  }

  render () {
    const { countries } = this.props;

    if (countries.length >= 1) {
      return (
        <PopulationFormStyled onSubmit={this.handleSubmit}>
          <LabelStyled htmlFor="country-select">Country:</LabelStyled>
          <DropdownStyled
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
          </DropdownStyled>
    
          <LabelStyled htmlFor="population-value">Population:</LabelStyled>
          <InputStyled
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

    return (
      <div>Loading country data...</div>
    );
  }
}

PopulationForm.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopulationForm);

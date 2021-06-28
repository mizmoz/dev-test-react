
import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const PopulationListStyled = styled.ol`
  background: ${style('color.component')};
  font-family: ${style('baseFontFamily')};
  padding: ${style('paddingSmall')};
  list-style: none;
`;

const PopulationListItem = styled.li`
  padding: ${style('paddingTiny')};
  
  &:nth-child(even) {
    background: ${style('color.componentAlt')};
  }
`;

const mapDispatchToProps = dispatch => ({
  deleteCountryPopulation: (selectedCountry) => {
    // dispatch(deleteCountryPopulation(selectedCountry));
  },
});

const mapStateToProps = state => {
  return {
    countries: state.countries,
    populations: state.populations
  };
};

class PopulationList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCountryPopulation = this.deleteCountryPopulation.bind(this);
  }

  deleteCountryPopulation() {
    this.props.deleteCountryPopulation();
  }

  render () {
    const { countries, populations } = this.props;
    const storedPairs = [];

    Object.keys(populations).forEach((key,index) => {
      storedPairs.push({
        name: countries.find(country => country.code === key).name,
        population: populations[key],
      });
    });

    storedPairs.sort((a, b) => a.population - b.population);

    if (storedPairs.length >= 1) {
      return (
        <PopulationListStyled>
          {storedPairs.map(country  => (
            <PopulationListItem key={country.name}>{country.name} - {country.population}</PopulationListItem>
          ))}
        </PopulationListStyled>
      );
    }

    return null;
  }
}

PopulationList.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(PopulationList);

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { style } from '../../configs/theme';
import PropTypes from 'prop-types';
import { changeCountry } from '../../actions/index';


function mapDispatchToProps(dispatch) {
  return {
    changeCountry: country => dispatch(changeCountry(country))
  };
};

const mapStateToProps = state => {
  return { countries: state.countries, selected_country: state.selected_country };
};

const LiStyled = styled.li`
  font-family: ${style('headerFontFamily')};
  font-size: ${style('fontSize.normal')};
  font-weight: ${style('headerFontWeight')};
  line-height: ${style('fontSize.normal')};
  padding: ${style('paddingHalf')};
  position: relative;
  cursor: pointer;
  list-style-type: none;
  text-decoration: none;
  margin-left: ${style('marginHalf')};
  &.even_row {
    background-color: ${style('color.tertiary')};
  }
  &:hover {
    background-color:  ${style('color.primary')};;
  }
  &.selected {
    background-color: ${style('color.primary')};
  }
`;

const CountriesListBlock = (props) => {
  const { countries, selected_country } = props;
  return (
    <ul>
      {countries.map((country, index) => (
        <LiStyled
          className={(selected_country === country.code) ? 'selected' : ((index % 2) ? 'even_row' : 'odd_row')} 
          key={country.code}
          value={country.code}
          onClick = {() => props.changeCountry(country.code)}>
          {country.name} {country.population}
        </LiStyled>
      ))}
    </ul>
  );
};

CountriesListBlock.propTypes = {
  color: PropTypes.string,
};

CountriesListBlock.defaultProps = {
  color: 'primary',
};
const CountriesList = connect(
  mapStateToProps, 
  mapDispatchToProps,
)(CountriesListBlock);
export default CountriesList;

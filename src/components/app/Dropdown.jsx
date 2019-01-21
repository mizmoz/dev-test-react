import React from "react";
import { connect } from "react-redux";
import { changeCountry } from "../../actions/index";
import styled from 'styled-components';
import { style } from '../../configs/theme';

function mapDispatchToProps(dispatch) {
  return {
    changeCountry: country => dispatch(changeCountry(country))
  };
};

const mapStateToProps = state => {
  return { countries: state.countries, selected_country: state.selected_country };
};

const DropdownStyled = styled.select`
  font-family: ${style('headerFontFamily')};
  font-size: ${style('fontSize.normal')};
  font-weight: ${style('headerFontWeight')};
  line-height: ${style('fontSize.normal')};
  padding: ${style('paddingHalf')};
  position: relative;
  text-decoration: none;
  margin-left: ${style('marginHalf')};
`

const DropdownBlock = (props) => {
  const {countries, selected_country} = props;
  return (
    <DropdownStyled value={selected_country} onChange={(e) => props.changeCountry(e.target.value)}>
      <option value="">Select country... </option>
      {countries.map(country  => (
        <option key={country.code} value={country.code} >
          {country.name}
        </option>
      ))}
    </DropdownStyled>
  )
};

const Dropdown = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);
export default Dropdown;
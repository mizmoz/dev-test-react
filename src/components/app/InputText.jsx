import React from "react";
import { connect } from "react-redux";
import { changePopulation } from "../../actions/index";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const mapStateToProps = state => {
  return { selected_population: state.selected_population };
};

function mapDispatchToProps(dispatch) {
  return {
    changePopulation: population => dispatch(changePopulation(population))
  };
};

const InputTextStyled = styled.input.attrs({
  type: 'text',
})`
  font-family: ${style('headerFontFamily')};
  font-size: ${style('fontSize.normal')};
  font-weight: ${style('headerFontWeight')};
  line-height: ${style('fontSize.normal')};
  position: relative;
  text-decoration: none;
  margin-left: ${style('marginHalf')};
  ::placeholder {
    color: ${style('tertiary')};
  }
`

const InputTextBlock = ({ selected_population, ...props }) => (
  <InputTextStyled {...props}
    value={selected_population || ''} 
    name="text_population"
    onChange={(e) => props.changePopulation(e.target.value)}
  />
);

InputTextBlock.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

InputTextBlock.defaultProps = {
  type: "text",
  placeholder: "Population"
};

const InputText = connect(
  mapStateToProps, 
  mapDispatchToProps
)(InputTextBlock);
export default InputText;

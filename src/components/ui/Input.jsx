import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {style} from "../../configs/theme";

const InputStyled = styled.input`
  background: ${(props) => props.theme.color[props.color]};
  border-radius: ${style("radius")};
  box-shadow: ${style("shadow.small")};
  border: none;
  color: ${(props) => props.theme.color[`${props.color}Alt`]};
  display: block;
  font-family: ${style("headerFontFamily")};
  font-size: ${style("fontSize.normal")};
  font-weight: ${style("headerFontWeight")};
  line-height: ${style("fontSize.normal")};
  margin: ${style("marginHalf")} 0;
  padding: ${style("paddingHalf")};
  width: 100%;
`;

const Input = ({type, defaultValue, readonly, ...props}) => (
    <InputStyled type={type} readOnly={readonly} defaultValue={defaultValue} {...props}/>
);

Input.propTypes = {
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    readonly: PropTypes.bool
};

Input.defaultProps = {
    type: "text",
    defaultValue: "",
    readonly: false
};

export default Input;

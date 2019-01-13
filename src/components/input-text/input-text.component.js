import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style } from "../../configs/theme";

const InputTextStyled = styled.input`
  border-radius: ${style("radius")};
  flex-grow: 1;
  text-align: right;
`;

const InputText = ({
  id,
  type,
  placeholder = "change me",
  onChange,
  ...propList
}) => (
  <InputTextStyled
    id={id}
    placeholder={placeholder}
    type={type}
    onChange={onChange}
    {...propList}
  />
);

InputText.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

InputText.defaultProps = {
  type: "text"
};

export default InputText;

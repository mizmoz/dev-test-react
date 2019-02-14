import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {style} from "../../configs/theme";

const SelectStyled = styled.select`
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

const Select = ({options, text, value, keyProp, ...props}) => (
    <SelectStyled {...props}>
        {
            options.map((option) => (
                <option value={option[value]} key={option[keyProp]}>
                    {option[text]}
                </option>
            ))
        }
    </SelectStyled>
);

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keyProp: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onChange: PropTypes.func
};

Select.defaultProps = {

};

export default Select;

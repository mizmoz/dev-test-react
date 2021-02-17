import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../configs/theme';

const StyledSelect = styled.select`
    background: ${props => props.theme.color[props.color]};
    border-radius: ${style('radius')};
    box-shadow: ${style('shadow.small')};
    border: none;
    color: ${props => props.theme.color[`${props.color}Alt`]};

    cursor: pointer;
    display: inline-block;
    font-family: ${style('headerFontFamily')};
    font-size: ${style('fontSize.normal')};
    font-weight: ${style('headerFontWeight')};
    line-height: ${style('fontSize.normal')};
    padding: ${style('paddingHalf')};
    position: relative;
    text-decoration: none;
    margin-left: ${style('marginHalf')};
`

const Dropdown = ({ options, onChange, ...props }) => {

    return (<StyledSelect {...props} on onChange={(event) => onChange(event)}>
        {options?.map(option => (
            <option key={JSON.stringify(option.value)} value={JSON.stringify(option.value)}>{option.label}</option>
        ))}
    </StyledSelect>
    )
}

export default React.memo(Dropdown)
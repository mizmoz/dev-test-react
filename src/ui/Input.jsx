
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../configs/theme';

const StyledInput = styled.input`
    background: ${props => props.theme.color[props.color]};
    border-radius: ${style('radius')};
    box-shadow: ${style('shadow.small')};
    border: none;
    color: ${props => props.theme.color[`${props.color}Alt`]};

    display: inline-block;
    font-family: ${style('headerFontFamily')};
    font-size: ${style('fontSize.normal')};
    font-weight: ${style('headerFontWeight')};
    line-height: ${style('fontSize.normal')};
    padding: .35rem;
    position: relative;
    text-decoration: none;
    margin-left: ${style('marginHalf')};
`;

const Input = props => {
    return (
        <StyledInput {...props}></StyledInput>
    )
}

export default Input
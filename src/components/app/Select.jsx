
import styled from 'styled-components';
import { style } from '../../configs/theme';
import React from 'react';


const StyledSelect = styled.select`
    color: #ffffff;
    height: 30px;
    width: 100%;
    background-color: black;
    border-radius: 3px;

    cursor: pointer;
    display: inline-block;
    font-family: ${style('headerFontFamily')};
    font-size: ${style('fontSize.normal')};
    font-weight: ${style('headerFontWeight')};
    line-height: ${style('fontSize.normal')};
    position: relative;
    text-decoration: none;
    margin-left: ${props => props.ml};
    margin-right:${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
`;

const Select = ({ data, onChange, value}) => {
    return <StyledSelect value={value} onChange={onChange}>
        { data ? data.map((value, index) => <option value={index} key={index}>{value.name && value.population ? value.name + "-" + value.population : value.name} </option>) : <React.Fragment /> }
    </StyledSelect>;
};

export default Select;
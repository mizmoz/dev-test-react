import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const SelectStyled = styled.select`
	border-radius: ${style('radius')};
	box-shadow: ${style('shadow.small')};
	border: none;
	font-family: ${style('baseFontFamily')};
	font-size: ${style('fontSize.normal')};
	font-weight: ${style('baseFontWeight')};
	line-height: ${style('fontSize.normal')};
	padding: ${style('paddingTiny')};
	position: block;
	text-decoration: none;
	margin-top: ${style('marginHalf')};
	margin-left: ${style('marginHalf')};
	width: 350px;
`;

const Select = ({ ...props }) => <SelectStyled {...props} />;

Select.propTypes = {
	color: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

Select.defaultProps = {
	color: 'primary',
	type: 'select'
};

export default Select;

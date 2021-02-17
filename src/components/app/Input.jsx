import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const InputStyled = styled.input`
	border-radius: ${style('radius')};
	box-shadow: ${style('shadow.small')};
	border: none;

	font-family: ${style('baseFontFamily')};
	font-size: ${style('fontSize.normal')};
	font-weight: ${style('baseFontWeight')};
	line-height: ${style('fontSize.normal')};
	padding: ${style('paddingTiny')};

	display: block;
	text-decoration: none;
	margin-top: ${style('marginHalf')};
	margin-left: ${style('marginHalf')};
	width: 350px;
`;

const Input = ({ label, ...props }) => <InputStyled {...props} />;

Input.propTypes = {
	onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
	color: 'primary',
	type: 'input'
};

export default Input;

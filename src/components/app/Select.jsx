import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const InputStyled = styled.select`
	border-radius: ${style('radius')};
	box-shadow: ${style('shadow.small')};

	font-family: ${style('baseFontFamily')};
	font-size: ${style('fontSize.normal')};
	font-weight: ${style('baseFontWeight')};
	line-height: ${style('fontSize.normal')};
	padding: ${style('paddingTiny')};
	position: relative;
	text-decoration: none;
	margin-left: ${style('marginHalf')};
`;

const Select = ({ ...props }) => <InputStyled {...props} />;

Select.propTypes = {
	color: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

Select.defaultProps = {
	color: 'primary',
	type: 'select'
};

export default Select;

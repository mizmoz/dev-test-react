import React from 'react';
import styled from 'styled-components/macro';

import { color } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';

const Wrapper = styled.button`
	margin: 0;
	padding: ${getSpacing(SPACING.small)} ${getSpacing()};
	border: 0;
	color: ${color.headerFont};
	cursor: pointer;
	transition: all 0.2s ease-out;

	${props =>
		props.level === 'primary' &&
		`
    background: ${color.primary};

    &:hover,
    &:focus {
      color: ${color.white};
      background: ${color.primaryAlt};
    }
	`};

	${props =>
		props.level === 'secondary' &&
		`
		padding: ${getSpacing(SPACING.tiny)} ${getSpacing(SPACING.small)};
		color: ${color.white};
    background: ${color.secondary};

    &:hover,
    &:focus {
      background: ${color.secondaryAlt};
    }
	`};

	&:disabled {
		cursor: not-allowed;
		background: ${color.tertiary};
	}
`;

export function Button(props) {
	const { children, disabled, level, type, onClick } = props;

	return (
		<Wrapper disabled={disabled} level={level} type={type} onClick={onClick}>
			{children}
		</Wrapper>
	);
}

Button.defaultProps = {
	disabled: false,
	level: 'primary',
	type: 'button',
};

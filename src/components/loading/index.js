import React from 'react';
import styled from 'styled-components/macro';

import { SPACING, getSpacing } from 'styles/dimensions';

const Loader = styled.div`
	display: grid;
	grid-template-rows: min-content min-content;
	grid-gap: ${getSpacing(SPACING.large)};
	justify-content: center;
	font-size: 1.75rem;
`;

const Spinner = styled.span`
	@keyframes load8 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	position: relative;
	width: 115px;
	height: 115px;
	border-top: 10px solid rgba(0, 0, 0, 0.2);
	border-right: 10px solid rgba(0, 0, 0, 0.2);
	border-bottom: 10px solid rgba(0, 0, 0, 0.2);
	border-left: 10px solid #000;
	border-radius: 50%;
	text-indent: -9999em;
	transform: translateZ(0);
	animation: load8 1.1s infinite linear;

	&:after {
		border-radius: 50%;
		width: 10em;
		height: 10em;
	}
`;

export function Loading() {
	return (
		<Loader>
			<Spinner />
			Loading...
		</Loader>
	);
}

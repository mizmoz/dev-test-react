import React from 'react';
import styled from 'styled-components/macro';

import { Home } from 'containers/home';
import { color } from 'styles/color';
import { MAX_WIDTH, SPACING, getSpacing } from 'styles/dimensions';

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: min-content 1fr;
	grid-gap: ${getSpacing(SPACING.large)};
	align-items: center;
	margin: 0 auto;
	padding: ${getSpacing()};
	max-width: ${MAX_WIDTH};
	min-height: 100vh;
	background: ${color.component};
`;

export function App() {
	return (
		<Wrapper>
			<h1>Country Populations</h1>

			<Home />
		</Wrapper>
	);
}

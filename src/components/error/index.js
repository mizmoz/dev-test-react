import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import { Button } from 'components/button';
import { CountryContext } from 'providers/country';
import { SPACING, getSpacing } from 'styles/dimensions';

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: min-content min-content;
	grid-gap: ${getSpacing(SPACING.large)};
	justify-content: center;
	font-size: 1.75rem;
`;

export function Error() {
	const { reFetchCountries } = useContext(CountryContext);

	return (
		<Wrapper>
			<p>There was a problem loading the data.</p>
			<p>
				<Button level="primary" type="button" onClick={reFetchCountries}>
					Try again
				</Button>
			</p>
		</Wrapper>
	);
}

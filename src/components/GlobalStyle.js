import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
	${normalize()};

	body {
		font-family: Helvetica, Arial, sans-serif;
		font-size: 16px;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	fieldset {
		border: 0;
		padding: 0;
		margin: 0;
		min-width: 0;
	}

	input,
	button,
	select,
	textarea {
		font: inherit;
	}
`;

import React from 'react';
import ReactDOM from 'react-dom';

import CountryProvider from 'providers/country';
import { GlobalStyle } from 'styles/global-style';

import { App } from './app';

ReactDOM.render(
	<CountryProvider>
		<GlobalStyle />
		<App />
	</CountryProvider>,
	document.getElementById('root')
);

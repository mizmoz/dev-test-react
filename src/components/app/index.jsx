import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import Form from './Form';
import { getCountries } from '../../actions/actions';

// create the redux store
const store = createStore();

store.dispatch(getCountries());

export default () => (
	<Provider store={store}>
		<Theme>
			<Layout>
				<H1>
					<Form />
				</H1>
			</Layout>
		</Theme>
	</Provider>
);

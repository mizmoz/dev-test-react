
import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import PopulationForm from './PopulationForm';
import { fetchCountries } from '../../actions';

// create the redux store
const store = createStore();

store.dispatch(fetchCountries());

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>
          Good luck!
        </H1>
        <PopulationForm />
      </Layout>
    </Theme>
  </Provider>
);

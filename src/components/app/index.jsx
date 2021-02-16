
import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import CountryPopulation from './CountryPopulation';

// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <CountryPopulation></CountryPopulation>
      </Layout>
    </Theme>
  </Provider>
);

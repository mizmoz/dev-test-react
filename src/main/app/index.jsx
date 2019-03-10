import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import SortedCountriesPage from '../../components/pages/sorted-countries';
import '@babel/polyfill';

// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <SortedCountriesPage />
      </Layout>
    </Theme>
  </Provider>
);

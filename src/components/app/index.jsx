
import React, { useState, useEffect }  from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import CountriesComponent from './countries/CountriesComponent';
// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>
          React Developer Test By Cleon
        </H1>
        <CountriesComponent />
      </Layout>
    </Theme>
  </Provider>
);

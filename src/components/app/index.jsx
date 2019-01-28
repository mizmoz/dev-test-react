
import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import Form from '../../containers/Form';
import apiCountry from '../../api/country';

// create the redux store
const store = createStore();

apiCountry().then(function (countries) {
  store.dispatch({ type: 'FETCH_COUNTRIES_COMPLETE', countries: countries })
}).catch(function (reason) {
  store.dispatch({ type: 'FETCH_COUNTRIES_ERROR', error: reason });
});

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>
          List of countries sorted by population:
        </H1>
        <Form />
      </Layout>
    </Theme>
  </Provider>
);


import React from 'react';
import { Provider } from 'react-redux';
import Theme from '@components/theme';
import createStore from '@store';
import { fetchCountriesData } from '@store/modules/countries';
import Layout from '@components/layout';
import H1 from '@components/app/H1';

// create the redux store
const store = createStore();

store.dispatch(fetchCountriesData());

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>
          Good luck!
        </H1>
      </Layout>
    </Theme>
  </Provider>
);

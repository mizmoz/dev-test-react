
import React from 'react';
import { Provider } from 'react-redux';
import Theme from '@components/theme';
import createStore from '@redux';
import Layout from '@components/layout';
import H1 from '@components/app/H1';

// create the redux store
const store = createStore();

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

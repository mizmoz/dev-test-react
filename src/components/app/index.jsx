
import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import Form from './Form';

// create the redux store
const store = createStore();

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


import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import Container from './Container';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';

// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>Countries</H1>
        <Container />
      </Layout>
    </Theme>
  </Provider>
);

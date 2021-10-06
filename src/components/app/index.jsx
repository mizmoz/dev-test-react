
import React from 'react';
import { Provider } from 'react-redux';
import Populations from 'features/Populations';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';

const { PopulationsContainer } = Populations.components;
// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>
          Dev Test React
        </H1>
        <PopulationsContainer />
      </Layout>
    </Theme>
  </Provider>
);

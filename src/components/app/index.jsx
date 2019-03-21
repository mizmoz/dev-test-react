
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import HeaderSection from '../header';
import Layout from '../layout';
import PopulationFrom from '../population-form';

// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Fragment>
        <HeaderSection />
        <Layout>
          <PopulationFrom />
        </Layout>
      </Fragment>
    </Theme>
  </Provider>
);


import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import Sidebar from '../layout/Sidebar';
import Main from '../layout/Main';
import Title from './Title';
import CountryForm from './CountryForm';
import CountryList from './CountryList';

// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <Sidebar>
          <Title label="Add country population" icon="assignment" light={true} />
          <CountryForm />
        </Sidebar>
        <Main>
          <Title label="Country by population" icon="workspaces" />
          <CountryList />
        </Main>
      </Layout>
    </Theme>
  </Provider>
);
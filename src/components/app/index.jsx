
import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import CountryData from './CountryData';
import styled from 'styled-components';
import Span from '../../ui/Span'

// create the redux store
const store = createStore();

const NavBar = styled.nav`
  background-color: black;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
`

export default () => (

  <Provider store={store}>
    <Theme>
      <>
        <NavBar>
          <Span>Country Population</Span>
        </NavBar>
        <Layout>
          <CountryData></CountryData>
        </Layout>
      </>
    </Theme>
  </Provider>
);

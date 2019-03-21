
import React from 'react';
import Header from './Header';
import Layout from '../layout';
import H1 from '../app/H1';
import SUBHEADING from './SubHeading';
import NOWSERVING from './NowServing';
import Counter from './Counter';

export default () => (
  <Header role='banner'>
    <Layout>
      <H1>Population fun</H1>
      <SUBHEADING>Now serving: <NOWSERVING><Counter>7</Counter><Counter>0</Counter><Counter>0</Counter><Counter>0</Counter><Counter>0</Counter><Counter>0</Counter><Counter>0</Counter><Counter>0</Counter><Counter>0</Counter><Counter>0</Counter></NOWSERVING></SUBHEADING>
    </Layout>
  </Header>
);

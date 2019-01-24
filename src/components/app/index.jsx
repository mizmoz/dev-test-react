
import React from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import Div from './Div';
import Button from './Button';
import Label from './Label';
import Select from './Select';
import Input from './Input';

// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>
          List of countries sorted by population:
        </H1>
        <form>
          <Div>
            <Label htmlFor="selectCountry">Select country:</Label>
            <Select id="selectCountry">
              <option>Country 1 - 10 000 000</option>
              <option>Country 2 - 9 000 000</option>
              <option>Country 3 - 8 000 000</option>
            </Select>
          </Div>
          <Div>
            <Label htmlFor="inputPopulation">Population:</Label>
            <Input type="number" id="inputPopulation" />
          </Div>
          <Div>
            <Button>Update population</Button>
            <Button>Delete population</Button>
          </Div>
        </form>
      </Layout>
    </Theme>
  </Provider>
);

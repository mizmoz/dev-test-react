import React, { Component } from 'react';
import Div from './Div';
import Button from './Button';
import Label from './Label';
import Select from './Select';
import Input from './Input';
import apiCountry from '../../api/country';

class Form extends Component {

  componentDidMount() {
    apiCountry().then(function (countries) {
      console.log(countries);
      debugger;
    }).catch(function (reason) {
      console.log('Handle rejected promise (' + reason + ') here.');
      debugger;
    });
  }

  render() {
    return (
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
    )
  }
}

export default Form;
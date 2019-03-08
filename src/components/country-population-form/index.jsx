import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormStyled, DropdownStyled, InputStyled } from './styled';
import Button from '../shared/Button';

export default class CountryPopulationForm extends Component {
  static propTypes = {
    addCountryToList: PropTypes.func.isRequired,
    countries: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  renderDropdownOptions = () =>
    this.props.countries.map(({ name, code }) => (
      <option value={name} key={code}>
        {name}
      </option>
    ));

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const countryName = form[0].value;
    const population = Number(form[1].value);
    //TODO: add validation for input and extract it into a util folder

    this.props.addCountryToList(countryName, population);
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <DropdownStyled required name='countryList'>
          {this.renderDropdownOptions()}
        </DropdownStyled>
        <InputStyled
          required
          name='population'
          type='number'
          placeholder='Country Population'
        />
        <Button type='submit' label={'Add to List'} onClick={() => { }} />
      </FormStyled>
    );
  }
}

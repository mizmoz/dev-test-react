import React from 'react';
import styled from 'styled-components';

const CountrySelect = styled.select`
  margin-bottom: 1em;
  padding: 0.25em;
  border: 0;
  border-bottom: 2px solid currentcolor;
  font-weight: bold;
  letter-spacing: 0.15em;
  border-radius: 0;
  &:focus,
  &:active {
    outline: 0;
    border-bottom-color: ${props => props.theme.color['secondary']};
  }
`;

export default class DropdownElement extends React.Component {
  generateOptions = countries => {
    return countries.map(country => {
      return (
        <option key={country.code} value={country.code}>
          {country.name}
        </option>
      );
    });
  };

  render() {
    const { countries } = this.props;
    return (
      <div>
        <div />
        Select a country :{' '}
        <CountrySelect onChange={this.props.onCountryChanged}>
          <option key="select_one" value="">
            Select One
          </option>
          {countries && this.generateOptions(countries)}
        </CountrySelect>
      </div>
    );
  }
}

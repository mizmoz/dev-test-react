import React from 'react';
import countries from '../../configs/country'
import styled from 'styled-components';

const InputSection = styled.div`
  align-items: center;
  margin-bottom: 20px;
  
  
  select, input[type="number"] {
    height: 40px;
    background: white;
    border: grey 1px solid;
    display: block;
    width: 100%;
  }
  
  input[type="submit"] {
    width: 100%;
    background: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
`;


export default class CountryForm extends React.PureComponent {

  state = {
    country: '',
    population: ''
  };

  componentDidMount () {

  }

  handleChange = (event) => {
    const stateKey = event.target.getAttribute('name');
    const stateVal = event.target.value;
    this.setState(() => ({
      [stateKey] : stateVal,
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render () {
    const { country, population } = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <InputSection>
          <label htmlFor="country">Country</label>
          <select
            value={country}
            onChange={this.handleChange}
            id="country"
            name="country"
          >
            {countries.map(({name, code}) => (
              <option key={code}>{name}</option>
            ))}
          </select>
        </InputSection>

        <InputSection>
          <label htmlFor="population">Population</label>
          <input
            name="population"
            id="population"
            type="number"
            placeholder="population"
            value={population}
            onChange={this.handleChange}
          />
        </InputSection>

        <InputSection>
          <input type="submit" value="Submit"/>
        </InputSection>

      </form>
    )
  }
}

// dispatch the submitedValue

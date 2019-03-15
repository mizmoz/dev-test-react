import React from 'react';
import countries from '../../configs/country'

export default class CountryForm extends React.PureComponent {

  state = {
    country: '',
    population: ''
  };

  componentDidMount () {

  }

  handleChange = (event) => {
    const stateKey = event.target.parentElement.getAttribute('for');
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
        <label htmlFor="country">Country
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
        </label>
        <label htmlFor="population">Population
          <input
            name="population"
            id="population"
            type="number"
            placeholder="population"
            value={population}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

// dispatch the submitedValue

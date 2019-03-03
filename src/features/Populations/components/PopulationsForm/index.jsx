import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/app/Button';
import { DeleteButton } from './components';

const FORM_ID = 'country-select';

class PopulationsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      selectedOption: '',
    };
  }

  onDelete = (countryCode) => {
    const { deleteCountryPopulationDispatch } = this.props;
    deleteCountryPopulationDispatch(countryCode);
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSelectChange = (event) => {
    const { countriesByCode } = this.props;
    const selectedCountry = countriesByCode[event.target.value];
    this.setState({
      selectedOption: event.target.value,
      inputValue: selectedCountry ? selectedCountry.population : '',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { setCountryPopulationDispatch } = this.props;
    const { inputValue, selectedOption } = this.state;
    setCountryPopulationDispatch(selectedOption, inputValue);
  }

  renderNoPopulations = () => (
    <p>Add some populations...</p>
  )

  renderPopulationsList = () => {
    const { countriesByPopulationArray } = this.props;
    return countriesByPopulationArray.map(country => (
      <li key={country.code}>
        {country.name}
        {country.population}
        <DeleteButton countryCode={country.code} onDelete={this.onDelete} />
      </li>
    ));
  }

  render = () => {
    const { countriesByCode, countriesByPopulationArray } = this.props;
    const { inputValue, selectedOption } = this.state;
    return (
      <section>
        <form id={FORM_ID} onSubmit={this.handleSubmit}>
          <select value={selectedOption} onChange={this.handleSelectChange} required>
            <option value="">--Please select a country--</option>
            {Object.values(countriesByCode).map(country => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
          <input
            type="number"
            value={inputValue}
            onChange={this.handleInputChange}
            required
            min={0}
          />
          <Button
            label="Submit"
            form={FORM_ID}
            onClick={this.handleSubmit}
            disabled={!inputValue || !selectedOption}
          />
        </form>
        <section>
          <h2>Countries by population</h2>
          <ol>
            {countriesByPopulationArray.length ? this.renderPopulationsList() : this.renderNoPopulations()}
          </ol>
        </section>
      </section>
    );
  }
}

PopulationsForm.propTypes = {
  countriesByCode: PropTypes.shape().isRequired,
  countriesByPopulationArray: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  })).isRequired,
  deleteCountryPopulationDispatch: PropTypes.func.isRequired,
  setCountryPopulationDispatch: PropTypes.func.isRequired,
};

export default PopulationsForm;

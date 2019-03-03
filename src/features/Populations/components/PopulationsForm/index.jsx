import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/app/Button';
import Form from 'components/app/Form';
import H2 from 'components/app/H2';
import InputText from 'components/app/InputText';
import Label from 'components/app/Label';
import ListItem from 'components/app/ListItem';
import P from 'components/app/P';
import Select from 'components/app/Select';
import {
  Country, DeleteButton, FlexWrapper, Population, Wrapper,
} from './components';

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
    <P>Add some populations...</P>
  )

  renderPopulationsList = () => {
    const { countriesByPopulationArray } = this.props;
    return (
      <ol>
        {countriesByPopulationArray.map(country => (
          <ListItem key={country.code}>
            <FlexWrapper>
              <Country>{country.name}</Country>
              <Population>{country.population}</Population>
              <DeleteButton
                countryCode={country.code}
                onDelete={this.onDelete}
              />
            </FlexWrapper>
          </ListItem>
        ))}
      </ol>
    );
  }

  render = () => {
    const { countriesByCode, countriesByPopulationArray } = this.props;
    const { inputValue, selectedOption } = this.state;
    return (
      <Wrapper>
        <Form id={FORM_ID} onSubmit={this.handleSubmit}>
          <Select value={selectedOption} onChange={this.handleSelectChange} required>
            <option value="">--Please select a country--</option>
            {Object.values(countriesByCode).map(country => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </Select>
          <Label>
            Population:
            <InputText
              type="number"
              value={inputValue}
              onChange={this.handleInputChange}
              required
              min={0}
            />
          </Label>
          <Button
            label="Submit"
            form={FORM_ID}
            onClick={this.handleSubmit}
            disabled={!inputValue || !selectedOption}
          />
        </Form>
        <section>
          <H2>Countries by population</H2>
          {countriesByPopulationArray.length ? this.renderPopulationsList() : this.renderNoPopulations()}
        </section>
      </Wrapper>
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

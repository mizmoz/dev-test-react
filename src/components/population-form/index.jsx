import React, { Component, lazy, Suspense, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCountries, updatePopulation } from '../../store/actions';
import getCountries from '../../api/country';
import { ErrorBoundary, withErrorBoundary } from '../error-boundary/index'; 
import PopulationFormError from './PopulationFormError';
import ErrorContainer from '../app/ErrorContainer';
import Form from './Form';
import FormLayout from './FormLayout';
import FormIntro from './FormIntro';
import Edit from './Edit';
import H2 from '../app/H2';
import Label from '../app/Label';
import Input from '../app/Input';
import Button from '../app/Button';
import Loader from '../loader';

// not really required for such a small application but playing with the features is cool
const LazyCountrySelect = lazy(() => import('../country-select'));
const LazyCountryList= lazy(() => import('../country-list'));

class PopulationForm extends Component {

  // set initial state and bind handlers
  constructor(props){
    super(props);
    this.state = { 
      selectedCountry: null,
      dataLoading: true,
      dataError: false,
    };
    this.handleRetryClick = this.handleRetryClick.bind(this);
    this.handleCountrySelection = this.handleCountrySelection.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handlePopulationInputChange = this.handlePopulationInputChange.bind(this);
  }

  // add population property to data, also converts to an object for easier redux updating
  static cleanCountryData = (countryData) => {
    let cleanedData = {};
    if (countryData && Array.isArray(countryData)) {
      countryData.forEach(country => { 
        let countryCopy = {...country};
        if (cleanedData.hasOwnProperty(countryCopy.code)){
          console.warn('duplicate country detected');
        } else {
          countryCopy.population = 0;
          cleanedData[countryCopy.code] = countryCopy;
        }
     });
    }
    return cleanedData;
  }

  // country data request and subsequent result or error handling
  getCountryData() {
    this.setState({dataLoading: true});
    getCountries()
    .then(response => {
      let cleanedData = PopulationForm.cleanCountryData(response);
      this.props.updateCountries(cleanedData);
      this.setState({dataError: false, dataLoading: false});
    })
    .catch(error => {
      if (error) {console.warn(error)};
      this.setState({dataError: true, dataLoading: false});
    });
  } 

  // re-request country data (intended for request error recovery) 
  handleRetryClick(evnt) {
    this.getCountryData();
  }

  // callback function for selecting a country by country code 
  // @param (unique) countryCode for target country
  handleCountrySelection(countryCode) {
    let country = this.props.countries.hasOwnProperty(countryCode) ? this.props.countries[countryCode] : null;
    this.setState({selectedCountry: country});
  }

  // form submition event handler
  handleFormSubmit(evnt) {
    evnt.preventDefault();
    this.props.updatePopulation(this.state.selectedCountry.code, this.state.selectedCountry.population);
  } 

  // data binding event handler for population input
  handlePopulationInputChange(evnt) {
    let newPopulationValue = parseInt(evnt.target.value);
    if (isNaN(newPopulationValue)) {
      console.warn('whoops, does not look like a number');
      return false;
    }
    let newStateCountry = {...this.state.selectedCountry};
    newStateCountry.population = newPopulationValue;
    this.setState({ selectedCountry: newStateCountry });
  }

  // load data
  componentDidMount() {
    this.getCountryData();
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        {!this.state.selectedCountry && <FormIntro>
          Control the destiny of the world's populations, just pick a country to get going....
        </FormIntro>}
        {this.state.dataError && <Fragment>
          <PopulationFormError />
          <Button type='button' onClick={this.handleRetryClick} label='Retry'></Button>
        </Fragment>}
        <FormLayout>
          {this.state.dataLoading && <Loader />}
          {!this.state.dataLoading && !this.state.dataError && <Fragment>
            <Edit>
            <ErrorBoundary ErrorFallBack={<ErrorContainer>Error on country select</ErrorContainer>}>
              <Suspense fallback={<Loader />}>
                  <LazyCountrySelect countries={this.props.countries} selectCountry={this.handleCountrySelection}/>
              </Suspense>
            </ErrorBoundary>
            {this.state.selectedCountry && <ErrorBoundary ErrorFallBack={<ErrorContainer>Error on country edit</ErrorContainer>}>
              <Fragment>
                <H2>Editing: {this.state.selectedCountry.name}</H2>
                <Label htmlFor='population'>Population</Label>
                <Input type='number' value={this.state.selectedCountry.population} onChange={this.handlePopulationInputChange} />
                <Button type='submit' label='Save' />
              </Fragment>
            </ErrorBoundary>}
            </Edit>

            <ErrorBoundary ErrorFallBack={<ErrorContainer>Error on country list</ErrorContainer>}>
              <Suspense fallback={<Loader />}>
                  <LazyCountryList countries={this.props.countries} />
              </Suspense>
            </ErrorBoundary>
          </Fragment>}
        </FormLayout>
      </Form>
    )
  }

}

// prop types for dev warnings
PopulationForm.propTypes = {
  countries: PropTypes.object
}

// default props
PopulationForm.defaultProps = {
  countries: {}
}

// redux store connected properties
const mapStateToProps = state => ({
  countries: state.countries
});

// redux actions
const mapDispatchToProps = dispatch => ({
  updateCountries: (countries) => dispatch(updateCountries(countries)),
  updatePopulation: (code, population) => dispatch(updatePopulation(code, population))
});

// export with redux connection and HoC error boundary
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorBoundary(PopulationForm, PopulationFormError));
import React from 'react';
import { connect } from 'react-redux';
import DropdownElement from './DropdownElement';
import {
  getPopulation,
  setPopulation,
  setCurrentCountry,
  deletePopulation
} from '../../store/actions';
import AddEditPopulationContainer from './AddEditPopulation';

export class PopulationEdit extends React.Component {
  onCountryChanged = event => {
    const { dispatch, getPopulation } = this.props;
    const selectedCountry = event.target.value;
    const selectedCountryName =
      event.target.options[event.target.selectedIndex].text;
    if (selectedCountry !== '') {
      dispatch(setCurrentCountry(selectedCountry, selectedCountryName));
      dispatch(getPopulation(selectedCountry));
    }
  };

  onSavePopulation = (currCountryCode, currentCountryName, newPopulation) => {
    const { dispatch, setPopulation } = this.props;
    dispatch(setPopulation(currCountryCode, currentCountryName, newPopulation));
  };

  onDeletePopulation = currCountryCode => {
    const { dispatch, deletePopulation } = this.props;
    dispatch(deletePopulation(currCountryCode));
  };

  render() {
    const {
      countries,
      hasError,
      currentCountry,
      currentCountryName,
      currentPopulation
    } = this.props;

    return (
      <div>
        {!hasError && (
          <div>
            <ul>
              <li>Select a country from dropdown and enter the population</li>
              <li>
                Press 'Save' and you will see country appear on the list on
                Right hand side
              </li>
              <li>
                To add population for another country, simply select new
                country!!
              </li>
            </ul>
            <br />
            <DropdownElement
              countries={countries}
              onCountryChanged={this.onCountryChanged}
            />
          </div>
        )}
        <br />
        {currentCountry !== '' && (
          <AddEditPopulationContainer
            countryCode={currentCountry}
            currentCountryName={currentCountryName}
            population={currentPopulation}
            onSave={this.onSavePopulation}
            onDelete={this.onDeletePopulation}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    hasError: state.hasError,
    currentCountry: state.currentCountry,
    currentCountryName: state.currentCountryName,
    currentPopulation: state.currentPopulation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    getPopulation,
    setPopulation,
    deletePopulation,
    setCurrentCountry
  };
};

const PopulationEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopulationEdit);

export default PopulationEditContainer;

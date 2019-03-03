import * as actionTypes from './actionTypes';
import * as utils from './utils';
import countriesApiRequest from '../../api/country';

export const getCountriesRequest = () => ({
  type: actionTypes.GET_COUNTRIES_REQUEST,
});

export const getCountriesSuccess = countriesByCode => ({
  type: actionTypes.GET_COUNTRIES_SUCCESS,
  countriesByCode: countriesByCode,
});

export const getCountriesError = () => ({
  type: actionTypes.GET_COUNTRIES_ERROR,
});

export const getCountries = () => (dispatch) => {
  dispatch(getCountriesRequest());
  countriesApiRequest()
    .then((countries) => {
      const countriesByCode = utils.countriesByCode(countries);
      dispatch(getCountriesSuccess(countriesByCode));
    })
    .catch(() => {
      dispatch(getCountriesError());
    });
};

export const setCountryPopulation = (countryCode, population) => ({
  type: actionTypes.SET_COUNTRY_POPULATION,
  countryCode: countryCode,
  population: population,
});

export const deleteCountryPopulation = countryCode => ({
  type: actionTypes.DELETE_COUNTRY_POPULATION,
  countryCode: countryCode,
});

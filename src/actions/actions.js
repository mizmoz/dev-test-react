import countries from '../api/country';
import * as types from './actionTypes';

export function getCountries() {
	return function loadCountries(dispatch) {
		const countriesData = countries();
		countriesData
			.then((data) => {
				dispatch(getCountriesSuccess(data));
			})
			.catch((error) => {
				//dispatch(getCountriesFailed(`error getting countries. ${error}`));
				loadCountries(dispatch);
			});
	};
}

export function getCountriesSuccess(data) {
	return { type: types.GET_COUNTRIES_SUCCESS, payLoad: { data: data } };
}

export function getCountriesFailed(error) {
	return { type: types.GET_COUNTRIES_FAILED, payLoad: { error: error } };
}

export function setPopulation(country) {
	return function(dispatch) {
		dispatch(setPopulationSuccess(country));
	};
}

export function setPopulationSuccess(country) {
	return { type: types.SET_POPULATION_SUCCESS, payLoad: { country: country } };
}

export function deleteCountry(countryId) {
	return function(dispatch) {
		dispatch(deleteCountrySuccess(countryId));
	};
}

export function deleteCountrySuccess(countryId) {
	return { type: types.DELETE_COUNTRY_SUCCESS, payLoad: { id: countryId } };
}

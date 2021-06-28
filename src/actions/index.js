import countryData from '../api/country';

export const GET_DATA = 'GET_DATA';
export const STORE_COUNTRY_POPULATION = 'STORE_COUNTRY_POPULATION';

export function getData(countries) {
  return {
    type: GET_DATA,
    countries,
  };
}

export function fetchCountries() {
  return function fetchThunk(dispatch) {
    const newCountryData = countryData();

    newCountryData.then((data) => {
      dispatch(getData(data));
    }).catch(() => {
      fetchThunk(dispatch);
    });
  };
}

export function storeCountryPopulation(country, population) {
  return {
    type: STORE_COUNTRY_POPULATION,
    country,
    population,
  };
}

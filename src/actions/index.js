import countryData from '../api/country';

export const GET_DATA = 'GET_DATA';

export function getData(countries) {
  return {
    type: GET_DATA,
    countries,
  };
}

export function fetchCountries() {
  return function fetchThunk(dispatch) {
    const fetchCountries = countryData();

    fetchCountries.then((countryData) => {
      dispatch(getData(countryData));
    }).catch((e) => {
      fetchThunk(dispatch);
    });
  };
}

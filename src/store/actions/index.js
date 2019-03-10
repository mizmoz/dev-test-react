import fetchCountries from '../../api/country';
import { RECEIVED_COUNTRIES, ERROR_IN_FETCH } from '../../consts';

//NOTE - I would split this into sub action-creators as the app grew.

const receivedCountryList = countries => ({
  type: RECEIVED_COUNTRIES,
  payload: countries
});

const apiError = err => ({
  type: ERROR_IN_FETCH,
  payload: err
});

export const loadCountries = () => async dispatch => {
  try {
    await fetchCountries().then(countries =>
      dispatch(receivedCountryList(countries))
    );
  } catch (err) {
    console.error('Error in fetching countries from API', err);
    dispatch(apiError(err));
    throw err;
  }
};

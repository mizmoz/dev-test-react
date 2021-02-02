import { START_FETCH, SUCCESS_FETCH, ERROR_FETCH } from '../types/country';
import fetchCountry from '../api/country';
export const startFetch = () => {
  return {
    type: START_FETCH,
  };
};

export const successFetch = (payload) => {
  return {
    type: SUCCESS_FETCH,
    payload
  };
};

export const errorFetch = () => {
  return {
    type: ERROR_FETCH,
  };
};

export function fetchCountries(dispatch) {
  dispatch(startFetch())
  fetchCountry()
    .then(result => dispatch(successFetch(result)))
    .catch(_ => dispatch(errorFetch()))
    .finally(() => console.log("Promise resolved!"));
}
import {
  UPDATE_COUNTRIES,
  UPDATE_COUNTRY,
  DELETE_COUNTRY,
} from './actions';

export const getInitialState = () => ({
  countries: [],
});

export const updateCountries = (state, action) => {
  return state;
};

export const updateCountry = (state, action) => {
  return state;
};

export const deleteCountry = (state, action) => {
  return state;
};

export default (state, action) => {
  switch (action.type) {
    case UPDATE_COUNTRIES:
      return updateCountries(state, action);
    case UPDATE_COUNTRY:
      return updateCountry(state, action);
    case DELETE_COUNTRY:
      return deleteCountry(state, action);
    default:
      return state;
  }
};

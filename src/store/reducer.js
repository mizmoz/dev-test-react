/*
  In real world application, we'd probably have a countriesReducer 
  to take care of all the countries operation
  and use ImmutableJS or similar to make the state operations bit simpler
*/
import {
  UPDATE_COUNTRIES,
  UPDATE_COUNTRY,
  DELETE_COUNTRY,
} from './actions';

export const getInitialState = () => ({
  countries: [],
});

export const updateCountries = (state, action) => {
  if (action) {
    const { countries } = action;
    return { ...state, countries };
  }

  return state;
};

export const updateCountry = (state, action) => {
  if (action) {
    const { country } = action;
    const countries = state.countries.map((c) => {
      //  is the country we're ammending?
      if (c.code === country.code) {
        //  clone all the original props first and then patch
        //  it with with the update object
        return {
          ...c,
          ...country,
        };
      }

      //  country hasn't changed
      return c;
    });

    return { ...state, countries };   
  }
  
  return state;
};

export const deleteCountry = (state, action) => {
  if (action) {
    const { country } = action;
    const countries = state.countries.filter((c) => {
      //  is it the country we're removing
      return c.code !== country.code;
    });

    return { ...state, countries };   
  }

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

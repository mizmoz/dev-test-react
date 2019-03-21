
import types from './types';

export const getInitialState = () => ({
  countries: {}
});

export default (state, action) => {

  switch (action.type) {
    case types.UPDATE_COUNTRIES: {
      return {
        ...state,
        countries: action.payload
      }
    }
    case types.UPDATE_POPULATION: {
      const targetCountry = action.payload.code;
      return {
        ...state,
        countries: {
          ...state.countries,
          [targetCountry]: {
            ...state.countries[targetCountry],
            population: action.payload.population
          }
        }
      }
    }
    default: {
      return state
    }
  }
};

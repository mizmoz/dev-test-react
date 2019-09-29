/*
  In real world application, we'd probably have a countriesReducer
  to take care of all the countries operation
  and use ImmutableJS or similar to make the state operations bit simpler
*/
import {
  UPDATE_COUNTRIES,
  UPDATE_COUNTRY,
  DELETE_COUNTRY,
  SELECT_COUNTRY,
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


export const sortByPopulation = (a, b) => {
  const populationA = (a.population !== undefined) ? a.population : 0;
  const populationB = (b.population !== undefined) ? b.population : 0;

  if (populationA < populationB) {
    return 1;
  }
  if (populationA > populationB) {
    return -1;
  }
  return 0;
};

export const sortCountries = (state) => {
  const countries = state.countries.slice();
  countries.sort(sortByPopulation);

  return { ...state, countries };
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

export const selectCountry = (state, action) => {
  if (action) {
    const { countryId } = action;
    const countries = state.countries.map((c) => {
      const isSelected = c.code === countryId;
      return { ...c, isSelected };
    });

    return { ...state, countries };
  }

  return state;
};

export const deleteCountry = (state, action) => {
  if (action) {
    const { countryId } = action;
    const countries = state.countries.filter(c => c.code !== countryId);

    return { ...state, countries };
  }

  return state;
};

export default (state, action) => {
  switch (action.type) {
    case UPDATE_COUNTRIES:
      return updateCountries(state, action);
    case UPDATE_COUNTRY:
      return sortCountries(updateCountry(state, action));
    case DELETE_COUNTRY:
      return deleteCountry(state, action);
    case SELECT_COUNTRY:
      return selectCountry(state, action);
    default:
      return state;
  }
};

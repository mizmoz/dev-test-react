import types from './types';

export const updateCountries = (countryData) => ({
  type: types.UPDATE_COUNTRIES,
  payload: countryData
})

export const updatePopulation = (countryCode, population) => ({
  type: types.UPDATE_POPULATION,
  payload: {
    code: countryCode, 
    population: population
  }
})
import {
  GET_DATA, CHANGE_COUNTRY, CHANGE_POPULATION, UPDATE_POPULATION, DELETE_POPULATION,
} from '../configs/action-types';

export function changeCountry(country) {
  // Selected country changed
  return {
    type: CHANGE_COUNTRY, country: country,
  };
}
export function changePopulation(population) {
  // Population input text value changed
  return {
    type: CHANGE_POPULATION, population: population,
  };
}
export function updatePopulation(code, population, message, message_color) {
  // Updated the countries values with a pair code-population
  return {
    type: UPDATE_POPULATION, code: code, population: population, message: message, message_color: message_color,
  };
}
export function deletePopulation(code, population, message, message_color) {
  // Remove the population value from the country code
  return {
    type: DELETE_POPULATION, code: code, population: population, message: message, message_color: message_color,
  };
}
export function getData(countries, loaded, message, message_color) {
  // Load the original countries data
  return {
    type: GET_DATA, countries: countries, loaded: loaded, message: message, message_color: message_color,
  };
}

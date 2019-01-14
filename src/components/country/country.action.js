import { ADD_POPULATION, DELETE_POPULATION } from "./country.constant";

export const addPopulation = payload => ({
  type: ADD_POPULATION,
  payload
});

export const deletePopulation = payload => ({
  type: DELETE_POPULATION,
  payload
});

export const ADD_POPULATION = 'ADD_POPULATION';
export const DELETE_POPULATION = 'DELETE_POPULATION';

export const addPopulation = (country) => ({type: ADD_POPULATION, payload: country});

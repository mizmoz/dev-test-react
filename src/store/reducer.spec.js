import reducer from './reducer';
import {ADD_POPULATION, DELETE_POPULATION} from "./actions";

describe('reducer', () => {

  let state;
  let action;

  beforeEach(() => {
    state = {
      populationList: [
        {country: 'england', population: 10},
        {country: 'france', population: 20},
      ]
    }
  });

  it('should add a country population to the populationList state', () => {
    action = { type: ADD_POPULATION, payload: {country: 'germany', population: 30} };
    expect(reducer(state, action)).toEqual({
      populationList: [
        {country: 'england', population: 10},
        {country: 'france', population: 20},
        {country: 'germany', population: 30},
      ]
    })

  });

  it('should update country population in the populationList state', () => {
    state = {
      populationList: [
        {country: 'england', population: 10},
        {country: 'france', population: 20},
      ]
    };
    action = { type: ADD_POPULATION, payload: {country: 'france', population: 30} };

    expect(reducer(state, action)).toEqual({
      populationList: [
        {country: 'england', population: 10},
        {country: 'france', population: 30},
      ]
    })
  });

  it('should remove a country population to the populationList state', () => {
    action = { type: DELETE_POPULATION , payload: 'france' };
    expect(reducer(state, action)).toEqual({
      populationList: [
        {country: 'england', population: 10},
      ]
    })
  });
})

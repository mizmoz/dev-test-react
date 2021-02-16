import { COUNTRY_CREATE, COUNTRY_READ, COUNTRY_UPDATE, COUNTRY_DELETE } from './actionTypes'

export const getInitialState = () => ({
  // initial state...
  countryPopulation: { country: null, population: 0 },
  countryPopulations: []
});

export default (state, action) => {
  switch (action.type) {
    case COUNTRY_CREATE: {
      const { countryPopulation } = action
      return {
        ...state,
        countryPopulations: [...state.countryPopulations, countryPopulation]
      }
    }
    case COUNTRY_READ: {
      const { country } = action
      return {
        ...state,
        countryPopulation: { ...state.countryPopulations.find(el => el.country.code === country.code) }
      }
    } case COUNTRY_UPDATE: {
      const { countryPopulation } = action
      let countryPopulations = [...state.countryPopulations]
      const index = countryPopulations.findIndex(el => el.country.code === countryPopulation.country.code)
      if (index > -1) {
        countryPopulations[index] = countryPopulation
      }
      return {
        ...state,
        countryPopulations: countryPopulations
      }
    }
    case COUNTRY_DELETE: {
      const { country } = action

      let countryPopulations = [...state.countryPopulations]
      const index = countryPopulations.findIndex(el => el.country.code === country.code)
      if (index > -1) {
        countryPopulations.splice(index, 1)
      }
      return {
        ...state,
        countryPopulations: countryPopulations
      }
    }

    default: {
      return state;
    }
  }
};

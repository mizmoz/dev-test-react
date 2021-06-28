import { GET_DATA, STORE_COUNTRY_POPULATION } from '../actions';

export const getInitialState = () => ({
  countries: [],
  populations: {},
});

export default (state, action) => {
  switch (action.type) {
    case GET_DATA: {
      return Object.assign({}, state, {
        countries: action.countries,
      });
    }
    case STORE_COUNTRY_POPULATION: {
      const updatedPopulations = Object.assign({}, state.populations);
      updatedPopulations[action.country] = action.population;

      return Object.assign({}, state, {
        populations: updatedPopulations,
      });
    }
    default:
      return state;
  }
};

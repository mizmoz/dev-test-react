import { ADD_POPULATION, DELETE_POPULATION } from "./country.constant";

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POPULATION:
      const countryExistsInState = state.filter(
        country => country.countryCode === action.payload.countryCode
      ).length;

      let newState = [];
      if (countryExistsInState) {
        // we want to update the existing value of the state
        newState = state.map(country =>
          country.countryCode === action.payload.countryCode
            ? { ...country, population: action.payload.population }
            : country
        );
      } else {
        // we want to add the value
        newState = [...state, action.payload];
      }
      return newState.sort((a, b) => a.population - b.population);
    case DELETE_POPULATION:
      return state.filter(country => country.countryCode !== action.payload);
    default:
      return state;
  }
};

export default countryReducer;

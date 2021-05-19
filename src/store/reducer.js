import {
  GET_DATA, CHANGE_COUNTRY, CHANGE_POPULATION, UPDATE_POPULATION, DELETE_POPULATION, ERR_PARSING,
} from '../configs/action-types';

export const getInitialState = () => ({
  // initial state...
  countries: [],
  selected_country: '',
  selected_population: 0,
  message: '',
  message_color: '',
  loaded: false,
});

export default (state, action) => {
  // reducers...
  switch (action.type) {
    case DELETE_POPULATION:
    case UPDATE_POPULATION:
      let countries = state.countries.map(
        (content) => (content.code === action.code) ? {...content, population: action.population}: content
      );

      countries= countries.slice().sort(function(a, b) {
        const populationA = parseInt(a.population) || 0,
          populationB = parseInt(b.population) || 0 ,
          nameA = a.name || "",
          nameB = b.name || "";
        if (populationA === populationB) {
          return nameA.localeCompare(nameB);
        }
        return (populationB - populationA);
      });
      return Object.assign({}, state, {
        countries: countries,
        selected_population: action.population,
        message: action.message,
        message_color: action.message_color,
      });
    case CHANGE_COUNTRY:
      const countrySelected = state.countries.find(
        (content) => {
          return content.code === action.country}
      );
      const current_population = (countrySelected && countrySelected.population) ? countrySelected.population : '';
      return Object.assign({}, state, {
        selected_country: action.country,
        selected_population: current_population,
      });

    case CHANGE_POPULATION:
      return Object.assign({}, state, {
        selected_population: action.population,
      });
    case GET_DATA:
      return Object.assign({}, state, {
        countries: action.countries,
        message: action.message,
        loaded: action.loaded,
    });
    case ERR_PARSING:
      return Object.assign({}, state, {
        message: action.message,
        message_color: action.message_color,
    });

    default:
      return state;
  }
};

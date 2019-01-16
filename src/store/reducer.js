export const getInitialState = () => ({
  countries: [],
  hasError: false,
  countryPopulationMap: new Map(),
  currentPopulation: 0,
  currentCountry: '',
  currentCountryName: ''
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case 'COUNTRY_DATA_RECEIVED':
      return Object.assign({}, state, {
        countries: action.data,
        hasError: false
      });
    case 'COUNTRY_DATA_FAILED':
      return Object.assign({}, getInitialState(), {
        hasError: true
      });
    case 'SET_CURR_COUNTRY':
      return Object.assign({}, state, {
        currentCountry: action.value,
        currentCountryName: action.countryName
      });
    case 'SET_POPULATION':
      const NewState = Object.assign({}, state, {
        currentCountry: action.countryCode,
        currentCountryName: action.currentCountryName,
        currentPopulation: action.countryPopulation
      });
      NewState.countryPopulationMap.set(action.countryCode, {
        code: action.countryCode,
        name: action.currentCountryName,
        population: action.countryPopulation
      });
      return NewState;
    case 'DELETE_POPULATION':
      const newState = Object.assign({}, state, {
        currentCountry: action.countryCode
      });
      newState.countryPopulationMap.delete(action.countryCode);
      return newState;
    case 'GET_POPULATION':
      if (state.countryPopulationMap.has(action.value)) {
        return Object.assign({}, state, {
          currentPopulation: state.countryPopulationMap.get(action.value)
            .population
        });
      } else {
        return state;
      }
    default:
      return state;
  }
};

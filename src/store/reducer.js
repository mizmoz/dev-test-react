
export const getInitialState = () => ({
  loading: true,
  error: false,
  countries: [],
  activeCountryCode: null,
  activeCountryPopulation: '',
});

export default (state, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_COMPLETE":
      return {
        ...state,
        loading: false,
        countries: action.countries,
        activeCountryCode: action.countries[0].code
      };
    case "FETCH_COUNTRIES_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "SET_POPULATION":
      const population = action.population ? action.population : '';
      let countries = state.countries.map(country =>
        (country.code === action.country)
          ? { ...country, population }
          : country
      )
      countries.sort((a, b) => (b.population ? b.population : 0) - (a.population ? a.population : 0));
      return {
        ...state,
        countries: countries,
        activeCountryPopulation: population
      }
    case "SET_ACTIVE_COUNTRY_CODE":
      const country = state.countries.find(country => country.code === event.target.value);
      return {
        ...state,
        activeCountryCode: action.activeCountryCode,
        activeCountryPopulation: country.population ? country.population : ''
      }
    case "SET_ACTIVE_COUNTRY_POPULATION":
      return {
        ...state,
        activeCountryPopulation: action.activeCountryPopulation
      }
    default:
      return state;
  }
};
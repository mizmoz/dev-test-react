
export const getInitialState = () => ({
  loading: true,
  error: false,
  countries: [],
  countrySelected: null
});

export default (state, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_COMPLETE":
      return {
        ...state,
        loading: false,
        countries: action.countries,
        countrySelected: action.countries[0].code
      };
    case "FETCH_COUNTRIES_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "SELECT_COUNTRY":
      return {
        ...state,
        countrySelected: action.countrySelected
      }
    case "SET_POPULATION":
      let countries = state.countries.map(country =>
        (country.code === action.country)
          ? { ...country, population: action.population }
          : country
      )
      return {
        ...state,
        countries: countries
      }
    default:
      return state;
  }
};
export const getInitialState = () => ({
  countryPopulations: [],
  isLoading: false,
  error: null,
  currentlyEditing: ''
});

export default (state, action) => {
  switch (action.type) {
    case 'UPSERT_COUNTRY':
      const countryPopulationIndex = state.countryPopulations.findIndex(countryPop => {
        return countryPop.country.code === action.data.country.code;
      });

      if (countryPopulationIndex !== -1) {
        const countryPopulations = [ ...state.countryPopulations ];
        countryPopulations[countryPopulationIndex] = action.data;
        
        return {
          ...state,
          currentlyEditing: '',
          countryPopulations: countryPopulations
        }
      } else {
        return {
          ...state,
          currentlyEditing: '',
          countryPopulations: [
            ...state.countryPopulations,
            action.data
          ]
        };
      }
    case 'REMOVE_COUNTRY':
      return {
        ...state,
        countryPopulations: state.countryPopulations.filter(countryPopulation => {
          return countryPopulation.country.code !== action.code;
        }) 
      };
    case 'LOAD_COUNTRIES_STARTED':
      return {
        ...state,
        isLoading: true
      }
    case 'LOAD_COUNTRIES_FAILED':
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case 'LOAD_COUNTRIES_SUCCESS':
      return {
        ...state,
        error: null,
        isLoading: false
      }
    case 'EDIT_COUNTRY':
      return {
        ...state,
        currentlyEditing: action.code
      }
    default:
      return state;
  }
};

import { START_FETCH, SUCCESS_FETCH, ERROR_FETCH } from '../types/country';

export const getInitialState = () => ({
  countries: [],
  error: null
});

export default (state, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SUCCESS_FETCH:
      return {
        ...state,
        countries: action.payload,
        isLoading: false,
        error: null
      };
    case ERROR_FETCH:
      return {
        ...state,
        isLoading: false,
        error: 'Error Fetching Countries'
      };
    default: return state;
  }
}
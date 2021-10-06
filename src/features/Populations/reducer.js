import * as actionTypes from './actionTypes';

const initialState = {
  error: false,
  loading: false,
  countriesByCode: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countriesByCode: action.countriesByCode,
      };
    case actionTypes.GET_COUNTRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.SET_COUNTRY_POPULATION: {
      const { countryCode, population } = action;
      return {
        ...state,
        countriesByCode: {
          ...state.countriesByCode,
          [countryCode]: {
            ...state.countriesByCode[countryCode],
            population,
          },
        },
      };
    }
    case actionTypes.DELETE_COUNTRY_POPULATION: {
      const { countryCode } = action;
      return {
        ...state,
        countriesByCode: {
          ...state.countriesByCode,
          [countryCode]: {
            ...state.countriesByCode[countryCode],
            population: '',
          },
        },
      };
    }
    default:
      return state;
  }
};

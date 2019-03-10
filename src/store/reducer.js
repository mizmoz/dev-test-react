import { RECEIVED_COUNTRIES, ERROR_IN_FETCH, API_ERROR } from '../consts';

export const getInitialState = () => ({
  countries: []
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case RECEIVED_COUNTRIES:
      return { ...state, countries: action.payload };
    case ERROR_IN_FETCH:
      return { ...state, errors: { type: API_ERROR, error: action.payload } };
    default:
      return { ...state };
  }
};

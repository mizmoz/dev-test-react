import { GET_DATA } from '../actions';

export const getInitialState = () => ({
  countries: [],
});

export default (state, action) => {
  switch (action.type) {
    case GET_DATA: {
      return Object.assign({}, state, {
        countries: action.countries,
      });
    }
    default:
      return state;
  }
};

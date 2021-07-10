import {
  FETCH_LOAD,
  FETCH_COMPLETE,
  FETCH_FAIL,
  EDIT_POPULATION
} from './../actions/action-api-results';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOAD:
      // Mark the state as "loading" so we can show a spinner or something
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_COMPLETE:
      // All done: set loading "false".
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

    case FETCH_FAIL:
      returnState = {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
      return returnState;

    case EDIT_POPULATION:
      var returnState =  {
        ...state,
        loading: false
      };
      console.log(':: return state ', action)
      returnState.items[action.country].value = action.value;
      return returnState;
      break;

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
import {combineReducers} from 'redux';
import reducer from './reducers/reducer';
import apiResults from './reducers/api-results-reducer';

const combiner = combineReducers({
  reducer,
  apiResults
});
export const getInitialState = () => ({
  // initial state...
});
export default combiner;

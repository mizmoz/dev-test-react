import { combineReducers } from 'redux';
import Populations from 'features/Populations';

export default combineReducers({
  [Populations.constants.NAME]: Populations.reducer,
});

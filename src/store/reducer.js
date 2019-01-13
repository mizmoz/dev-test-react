import countryReducer from "../components/form/country.reducer";
import { combineReducers } from "redux";

export const getInitialState = () => ({
  // initial state...
});

export default combineReducers({
  countryData: countryReducer
});

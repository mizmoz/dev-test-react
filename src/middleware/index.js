import { GET_DATA, UPDATE_POPULATION, ERR_PARSING, DELETE_POPULATION } from "../configs/action-types";
import { DATA_UPDATED, DATA_LOADING, ERR_NUMBER, ERR_COUNTRY, ERR_LOADING } from "../configs/messages";
import { MAX_RETRY_NUMBER, TIME_RETRY, MAX_POPULATION_LENGTH } from "../configs/retries";

import country from '../api/country';

let retries = 0; 
export function getDataMiddleware({ dispatch }) {
  return next => action => {
    if (action.type === GET_DATA) {
      const countries = country();
      countries.then((data) => {
        action.countries = data;
        action.loaded = true;
        action.message = DATA_UPDATED;
        next(action);
      }).catch((err) => {
        // If there is an error we will try again up to MAX_RETRY_NUMBER
        retries ++;
        if(retries < MAX_RETRY_NUMBER){
          setTimeout(() => (dispatch({type: GET_DATA, countries: [], message: DATA_LOADING})), TIME_RETRY * retries);
          return next(action);
        }
        return dispatch({ type: ERR_PARSING, message: ERR_LOADING, message_color: 'color.quaternary'});
      });
    }
    next(action);
  };
}

export function checkPopulationMiddleware({ dispatch }) {
  return next => action => {
    if ((action.type === UPDATE_POPULATION) || (action.type === DELETE_POPULATION)) {
      if (!action.code.length) {
        return dispatch({ type: ERR_PARSING, message: ERR_COUNTRY, message_color: 'color.quaternary'});
      }
      var reg = new RegExp('^\\d+$');
      if ((action.type !== DELETE_POPULATION) && (!action.population || !action.population.length || action.population.length > MAX_POPULATION_LENGTH || !(reg.test( action.population)))) {  
        return dispatch({ type: ERR_PARSING, message: ERR_NUMBER, message_color: 'color.quaternary'});
      }
    }
    return next(action);
  };
}

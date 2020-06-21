import { createStore, applyMiddleware } from 'redux';
import reducer, { getInitialState } from './reducer';
import country from '../api/country';

const dataService = store => next => action => {
  next(action);
  switch (action.type) {
    case 'FETCH_COUNTRY_DATA':
      country()
        .then(resp => {
          next({
            type: 'COUNTRY_DATA_RECEIVED',
            data: resp
          });
        })
        .catch(err => {
          next({
            type: 'COUNTRY_DATA_FAILED',
            data: []
          });
          console.log('Error Occured');
        });
    default:
      break;
  }
};

export default () =>
  createStore(reducer, getInitialState(), applyMiddleware(dataService));

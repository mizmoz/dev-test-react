
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { isDev } from '@config/environment';
import reducer, { getInitialState } from './reducer';

export default () => {
  const composeEnhancers = isDev() ? composeWithDevTools({}) : compose;

  const store = createStore(
    reducer,
    getInitialState(),
    composeEnhancers(applyMiddleware()),
  );

  return store;
};

import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { isDev } from '@config/environment';
import { reducer, epic } from './modules/countries';

const epicMiddleware = createEpicMiddleware();

export default () => {
  const composeEnhancers = isDev() ? composeWithDevTools({}) : compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(
      epicMiddleware,
    )),
  );

  epicMiddleware.run(epic);

  return store;
};

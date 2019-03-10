import { createStore, applyMiddleware } from 'redux';
import reducer, { getInitialState } from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () =>
  createStore(
    reducer,
    getInitialState(),
    composeWithDevTools(applyMiddleware(thunk))
  );


import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { getInitialState } from './reducer';

export default () => createStore(
  reducer,
  getInitialState(),
  composeWithDevTools(applyMiddleware(thunk))
);

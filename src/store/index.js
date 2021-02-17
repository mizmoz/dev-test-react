import { createStore, applyMiddleware } from 'redux';
import reducer, { getInitialState } from './reducer';
import thunk from 'redux-thunk';

export default () => createStore(reducer, getInitialState(), applyMiddleware(thunk));

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer, { getInitialState } from './reducer';

export default () => createStore(reducer, getInitialState(), applyMiddleware(thunk));

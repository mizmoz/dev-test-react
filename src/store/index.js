
import { createStore } from 'redux';
import reducer, { getInitialState } from './reducer';

export default () => createStore(reducer, getInitialState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

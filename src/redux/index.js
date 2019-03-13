
import { createStore } from 'redux';
import reducer, { getInitialState } from './reducer';

export default () => createStore(reducer, getInitialState());

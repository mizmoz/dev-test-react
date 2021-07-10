
import { createStore } from 'redux';
import combiner, { getInitialState } from './combiner';

export default () => createStore(combiner, getInitialState());

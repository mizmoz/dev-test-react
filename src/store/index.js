
import { createStore, applyMiddleware } from "redux";
import reducer, { getInitialState } from './reducer';
import { getDataMiddleware, checkPopulationMiddleware } from "../middleware";
import { getData } from "../actions/index";
import {DATA_LOADING} from "../configs/messages";

const store =  createStore(reducer, getInitialState(), applyMiddleware(getDataMiddleware, checkPopulationMiddleware));

store.dispatch(getData([],false, DATA_LOADING));
export default () => store;

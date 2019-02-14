import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducer, {getInitialState} from "./reducer";

export default () => createStore(
    reducer,
    getInitialState(),
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
);

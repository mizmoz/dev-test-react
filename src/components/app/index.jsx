import React from "react";
import { Provider } from "react-redux";
import createStore from "../../store";
import Countries from "./Countries";
import rootReducer from "../../store/reducers";
// create the redux store
const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <Countries />
  </Provider>
);

import React from "react";
import { Provider } from "react-redux";
import Theme from "../theme";
import createStore from "../../store";
import Layout from "../layout";
import H1 from "./H1";
import Country from "../country";

// create the redux store
const store = createStore();

export default () => (
  <Provider store={store}>
    <Theme>
      <Layout>
        <H1>Good luck!</H1>
        <Country />
      </Layout>
    </Theme>
  </Provider>
);

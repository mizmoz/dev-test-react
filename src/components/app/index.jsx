
import React from "react";
import {Provider} from "react-redux";
import Theme from "../theme";
import createStore from "../../store";
import Layout from "../layout";
import Form from "./Form";

// create the redux store
const store = createStore();

export default () => (
    <Provider store={store}>
        <Theme>
            <Layout>
                <Form/>
            </Layout>
        </Theme>
    </Provider>
);

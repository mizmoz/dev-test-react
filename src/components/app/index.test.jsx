import React from "react";
import {shallow} from "enzyme";
import App from "./index";
import {getInitialState} from "../../store/reducer";

describe("App", () => {

    const app = shallow(<App/>);
  
    it("renders properly", () => {
        expect(app).toMatchSnapshot();
    });

    it("checks initial App state", () => {

        const initialState = getInitialState();
        const appState = app.props().store.getState();

        expect(initialState).toEqual(appState);
    });

    it("checks Provider component", () => {

        expect(app.find("Provider").exists()).toBe(true);
    });

    it("checks Theme component", () => {

        expect(app.find("Theme").exists()).toBe(true);
    });

    it("checks Layout component", () => {

        expect(app.find("layout").exists()).toBe(true);
    });
  
    it("checks CountryForm component", () => {

        expect(app.find("Connect(CountryForm)").exists()).toBe(true);
    });
    
});

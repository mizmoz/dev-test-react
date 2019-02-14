import React from "react";
import {mount} from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {CountryForm} from "./Form";
import {getInitialState} from "../../store/reducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = getInitialState();
const store = mockStore(initialState);

describe("Form", () => {

    const mockFetchCountries = jest.fn();
    const mockAddPopulation = jest.fn();
    const mockDeletePopulation = jest.fn();

    const props = {
        fetchCountries: mockFetchCountries,
        addPopulation: mockAddPopulation,
        deletePopulation: mockDeletePopulation,
        error: false
    };

    let form = mount(<Provider store={store}><CountryForm {...props}/></Provider>);
  
    it("renders properly", () => {
        expect(form).toMatchSnapshot();
    });

    it("checks initial Form state", () => {

        const formState = form.props().store.getState();

        expect(initialState).toEqual(formState);
    });

    describe("when mounted CountryForm", () => {

        beforeEach(() => {
            form = mount(<CountryForm {...props}/>);
        });

        it("dispatches the fetchCountries() method it receives from props", () => {

            expect(mockFetchCountries).toHaveBeenCalled();
        });
    });

});

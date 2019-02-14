import actionTypes from "./types";
import countryApiCall from "../api/country";

const fetchCountries = () => async (dispatch) => {

    try {

        const countries = await countryApiCall();

        dispatch({
            type: actionTypes.FETCH_COUNTRIES_SUCCESS,
            payload: countries
        });
    }
    catch (error) {

        dispatch({
            type: actionTypes.FETCH_COUNTRIES_FAIL,
            payload: error
        });
    }
    
};

const addPopulation = (record) => (dispatch) => {
    
    dispatch({
        type: actionTypes.ADD_POPULATION,
        payload: record
    });
};

const deletePopulation = (code) => (dispatch) => {

    dispatch({
        type: actionTypes.DELETE_POPULATION,
        payload: code
    });
};

export default {
    fetchCountries,
    addPopulation,
    deletePopulation
};

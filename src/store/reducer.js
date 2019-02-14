import actionTypes from "../actions/types";

export const getInitialState = () => ({
    countries: [],
    population: [],
    error: false
});

export default (state = getInitialState(), action) => {
  
    switch (action.type) {

        case actionTypes.FETCH_COUNTRIES_SUCCESS:
            return {...state, countries: action.payload, error: false};

        case actionTypes.FETCH_COUNTRIES_FAIL:
            return {...state, countries: [], error: true};

        case actionTypes.ADD_POPULATION:
        {
            // Add or Update population from Array without mutation

            let population = [...state.population];
            const index = population.findIndex((record) => record.code === action.payload.code);

            if (index !== -1) {
                population[index] = action.payload;
            }
            else {
                population = [...state.population, action.payload];
            }

            population.sort((a, b) => b.population - a.population);

            return {...state, population};
        }
        case actionTypes.DELETE_POPULATION:
            return {...state, population: state.population.filter((record) => record.code !== action.payload)};

        default:
            return state;
    }
};

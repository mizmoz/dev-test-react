import * as types from '../actions/actionTypes';

export const getInitialState = () => ({
	// initial state...
	countries: [],
	isLoading: true,
	hasErrored: false,
	errorMessage: ''
});

export default (state, action) => {
	switch (action.type) {
		case types.GET_COUNTRIES_SUCCESS: {
			return Object.assign({}, state, {
				countries: action.payLoad.data.map((c, index) => {
					return { id: index, code: c.code, name: c.name, population: 0 };
				}),
				isLoading: false
			});
		}
		case types.GET_COUNTRIES_FAILED: {
			return Object.assign({}, state, {
				hasErrored: true,
				isLoading: true,
				errorMessage: action.payLoad.error
			});
		}
		case types.SET_POPULATION_SUCCESS:
			const countries = state.countries.map((item) => {
				return item.id === action.payLoad.country.id ? action.payLoad.country : item;
			});
			return Object.assign({}, state, {
				countries: countries
			});
		case types.DELETE_COUNTRY_SUCCESS:
			return Object.assign({}, state, {
				countries: state.countries.filter((country) => {
					return country.id !== action.payLoad.id;
				})
			});
		default:
			return state;
	}
};

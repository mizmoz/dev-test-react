const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
const FETCH_ERROR = 'FETCH_ERROR';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const POST_POPULATION = 'POST_POPULATION';
const SORT_COUNTRIES = 'SORT_COUNTRIES';

function getCountriesById(countries: Array<Object>) {
	return countries.reduce((obj, item) => {
		obj[item.code] = {
			name: item.name,
			population: '',
		};

		return obj;
	}, {});
}

export const initialState = {
	isFetching: true,
	hasError: false,
	countries: {},
};

export function reducer(state: Object, action: Object) {
	switch (action.type) {
		case FETCH_COUNTRIES:
			return {
				...state,
				isFetching: true,
				hasError: false,
			};
		case FETCH_ERROR:
			return {
				...state,
				isFetching: false,
				hasError: true,
			};
		case FETCH_SUCCESS:
			return {
				isFetching: false,
				hasError: false,
				countries: getCountriesById(action.data),
			};
		case POST_POPULATION:
			const { country, population } = action.data;
			const newCountries = { ...state.countries };
			newCountries[country].population = population;

			return {
				...state,
				countries: newCountries,
			};
		case SORT_COUNTRIES:
			const sortedCountries = {};

			Object.keys(state.countries)
				.sort((a, b) => {
					return state.countries[b].population - state.countries[a].population;
				})
				.forEach(function(key) {
					sortedCountries[key] = state.countries[key];
				});

			return {
				...state,
				countries: sortedCountries,
			};
		default:
			return state;
	}
}

export const fetchCountries = () => ({
	type: FETCH_COUNTRIES,
});

export const fetchError = () => ({
	type: FETCH_ERROR,
});

export const fetchSuccess = (data: Array<Object>) => ({
	type: FETCH_SUCCESS,
	data: data,
});

export const postPopulation = (data: Object) => ({
	type: POST_POPULATION,
	data: data,
});

export const sortCountries = () => ({
	type: SORT_COUNTRIES,
});

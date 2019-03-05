import React, { useReducer, useEffect } from 'react';
import type { Node } from 'react';

import Api from 'api/country';
import {
	initialState,
	reducer,
	fetchCountries,
	fetchError,
	fetchSuccess,
	postPopulation,
	sortCountries,
} from 'reducers/country';

export const CountryContext = React.createContext({
	state: {
		...initialState,
	},
	dispatch: () => {},
});

type Props = {
	children: Node,
};

export default function CountryProvider(props: Props) {
	const { children } = props;
	const [state, dispatch] = useReducer(reducer, initialState);

	function getCountries() {
		Api()
			.then(res => dispatch(fetchSuccess(res)))
			.catch(() => dispatch(fetchError()));
	}

	function reFetchCountries() {
		dispatch(fetchCountries());

		getCountries();
	}

	function updatePopulation(data) {
		dispatch(postPopulation(data));
	}

	function sortByPopulation() {
		dispatch(sortCountries());
	}

	useEffect(() => {
		getCountries();
	}, []);

	return (
		<CountryContext.Provider
			value={{
				state,
				dispatch,
				reFetchCountries,
				sortByPopulation,
				updatePopulation,
			}}
		>
			{children}
		</CountryContext.Provider>
	);
}

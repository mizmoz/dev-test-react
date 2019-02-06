import countries from './data/countries';

/**
 * API to get the countries, sometimes this fails.
 *
 * @returns {Promise<any>}
 */
export const fetchCountries = () => {
	return new Promise((resolve, reject) => {
		const hasResponse = Boolean(Math.round(Math.random()));
		setTimeout(() => (hasResponse ? resolve(countries) : reject()), 100);
	});
};

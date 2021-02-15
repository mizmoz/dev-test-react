import countries from '../config/country.json'

/**
 * API to get the countries, sometimes this fails.
 *
 * @returns {Promise<any>}
 */
const countriesApi = (): Promise<any> => new Promise((resolve, reject) => {
  setTimeout(() => (Math.round(Math.random()) === 0 ? resolve(countries) : reject()), 100);
});

export default countriesApi
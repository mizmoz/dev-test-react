
import countries from '../configs/country';

/**
 * API to get the countries, sometimes this fails.
 *
 * @returns {Promise<any>}
 */
export default () => new Promise((resolve, reject) => {
  setTimeout(() => (Math.round(Math.random()) <= 100 ? resolve(countries) : reject('error: no data')), 100);
});

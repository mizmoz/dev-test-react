
import countries from '../configs/country';

/**
 * API to get the countries, sometimes this fails.
 *
 * @returns {Promise<any>}
 */
export default () => new Promise((resolve, reject) => {
  setTimeout(() => (Math.round(Math.random()) === 0 ? resolve(countries) : reject()), 3000);
  //setTimeout(() => (Math.round(Math.random()) === 0 ? resolve(countries) : resolve(countries)), 3000);
});

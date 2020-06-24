/*
  Fetch data from the API, if it fails, keep trying until timeout
*/
import api from './country';

//  based on https://gist.github.com/briancavalier/842626
export const retryPromise = (fn, ms = 250, maxRetries = 5) => (
  new Promise((resolve, reject) => {
    let retries = 0;

    fn()
      .then(resolve)
      .catch(() => {
        setTimeout(() => {
          console.log('retrying failed promise...');
          retries += 1;
          if (retries === maxRetries) {
            return reject(new Error('maximum retries exceeded'));
          }
          retryPromise(fn, ms).then(resolve);
          return null;
        }, ms);
      });
  })
);

export default () => retryPromise(api);

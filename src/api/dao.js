/*
  Fetch data from the API, if it fails, keep trying until timeout
*/
import api from './country';

let refetchInterval = 500;

//  based on https://gist.github.com/briancavalier/842626
export const retryPromise = (fn, ms = 250, maxRetries=5) => {
  return new Promise((resolve,reject) => { 
    let retries = 0;

    fn()
      .then(resolve)
      .catch(() => {
          setTimeout(() => {
              console.log('retrying failed promise...');
              ++retries;
              if(retries === maxRetries) {
                  return reject('maximum retries exceeded');
              }
              retryPromise(fn, ms).then(resolve);
          }, ms);
      });
  });
};

export default () => {
  //  try fetching the data
  return retryPromise(api);
}
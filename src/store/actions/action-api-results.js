export const FETCH_LOAD   = 'FETCH_LOAD';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchLoad = () => ({
  type: FETCH_LOAD
});

export const fetchComplete = products => ({
  type: FETCH_COMPLETE,
  payload: { products }
});

export const fetchFail = error => ({
  type: FETCH_FAIL,
  payload: { error }
});

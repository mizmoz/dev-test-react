export const FETCH_LOAD   = 'FETCH_LOAD';
export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_FAIL = 'FETCH_FAIL';
export const EDIT_POPULATION = 'EDIT_POPULATION';

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

export const editPopulation = (country, value) => ({
  type: EDIT_POPULATION,
  country: country,
  value: value
})

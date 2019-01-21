export const GET_DATA = 'GET_DATA';

export function getData(countries) {
  return {
    type: GET_DATA,
    countries,
  };
}

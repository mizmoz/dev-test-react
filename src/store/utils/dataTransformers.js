/* eslint-disable import/prefer-default-export */
export const transformCountriesResponse = (state, collection) => ({
  byCode: {
    ...state.byId,
    ...collection.reduce((acc, { code, ...rest }) => {
      acc[code] = { code, ...rest };
      return acc;
    }, {}),
  },
  allCodes: Array.from(new Set([...state.allCodes, ...collection.map(item => String(item.code))])),
});

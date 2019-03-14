import {
  reducer,
  initialState,
  fetchCountriesDataSuccess,
} from './countries';

const mockResponsePayload = [
  {
    name: 'AFGHANISTAN',
    code: 'afg',
  }, {
    name: 'ALBANIA',
    code: 'alb',
  }, {
    name: 'ALGERIA',
    code: 'alg',
  },
];

describe('countries redux module', () => {
  describe('reducer', () => {
    it('should return current state', () => {
      expect(reducer(initialState, { type: 'SOME_ACTION' })).toEqual(initialState);
    });

    it('should normalise successful response', () => {
      const expected = {
        isFetching: false,
        byCode: {
          afg: { code: 'afg', name: 'AFGHANISTAN' },
          alb: { code: 'alb', name: 'ALBANIA' },
          alg: { code: 'alg', name: 'ALGERIA' },
        },
        allCodes: ['afg', 'alb', 'alg'],
      };
      expect(reducer(initialState, fetchCountriesDataSuccess(mockResponsePayload))).toEqual(expected);
    });
  });
});

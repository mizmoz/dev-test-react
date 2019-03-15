import {
  reducer,
  initialState,
  fetchCountriesDataSuccess,
  createPopulationRecord,
  deletePopulationRecord,
  selectRecords,
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

const mockState = {
  ...initialState,
  records: {
    afg: { code: 'afg', name: 'AFGHANISTAN', population: 123 },
    alb: { code: 'alb', name: 'ALBANIA', population: 456 },
    alg: { code: 'alg', name: 'ALGERIA', population: 789 },
  },
};

describe('countries redux module', () => {
  describe('reducer', () => {
    it('should return current state', () => {
      expect(reducer(initialState, { type: 'SOME_ACTION' })).toEqual(initialState);
    });

    it('should normalise successful response', () => {
      const expected = {
        ...initialState,
        countries: {
          byCode: {
            afg: { code: 'afg', name: 'AFGHANISTAN' },
            alb: { code: 'alb', name: 'ALBANIA' },
            alg: { code: 'alg', name: 'ALGERIA' },
          },
          allCodes: ['afg', 'alb', 'alg'],
        },
      };
      expect(reducer(initialState, fetchCountriesDataSuccess(mockResponsePayload))).toEqual(expected);
    });

    it('should add a record', () => {
      const expected = {
        ...initialState,
        records: {
          afg: { code: 'afg', name: 'AFGHANISTAN', population: 123 },
        },
      };
      expect(reducer(initialState, createPopulationRecord({
        country: { code: 'afg', name: 'AFGHANISTAN' },
        population: 123,
      }))).toEqual(expected);
    });

    it('should update a record', () => {
      const expected = {
        ...mockState,
        records: {
          ...mockState.records,
          afg: { code: 'afg', name: 'AFGHANISTAN', population: 321 },
        },
      };
      expect(reducer(mockState, createPopulationRecord({
        country: { code: 'afg', name: 'AFGHANISTAN' },
        population: 321,
      }))).toEqual(expected);
    });

    it('should delete a record', () => {
      const expected = {
        ...mockState,
        records: {
          alb: { code: 'alb', name: 'ALBANIA', population: 456 },
          alg: { code: 'alg', name: 'ALGERIA', population: 789 },
        },
      };
      expect(reducer(mockState, deletePopulationRecord({ code: 'afg' }))).toEqual(expected);
    });
  });

  describe('records selector', () => {
    it('should return sorted records', () => {
      const expected = [
        { code: 'alg', name: 'ALGERIA', population: 789 },
        { code: 'alb', name: 'ALBANIA', population: 456 },
        { code: 'afg', name: 'AFGHANISTAN', population: 123 },
      ];
      expect(selectRecords(mockState)).toEqual(expected);
    });
  });
});

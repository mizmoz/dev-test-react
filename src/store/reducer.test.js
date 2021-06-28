import Reducer from './reducer';

describe('Redux reducer', () => {
  test('returns the initial state', () => {
    const reducer = Reducer({}, {});

    expect(reducer).toEqual({});
  });

  test('GET_DATA', () => {
    const testCountries = ['foo', 'bar'];
    const reducer = Reducer({}, {
      type: 'GET_DATA',
      countries: testCountries,
    });

    expect(reducer).toEqual({
      countries: testCountries,
    });
  });

  test('STORE_COUNTRY_POPULATION', () => {
    const reducer = Reducer({}, {
      type: 'STORE_COUNTRY_POPULATION',
      country: 'afg',
      population: '100',
    });

    expect(reducer).toEqual({
      populations: {
        afg: '100',
      },
    });
  });

  test('STORE_COUNTRY_POPULATION update', () => {
    const reducer = Reducer({
      populations: {
        afg: '100',
      },
    }, {
      type: 'STORE_COUNTRY_POPULATION',
      country: 'afg',
      population: '50',
    });

    expect(reducer).toEqual({
      populations: {
        afg: '50',
      },
    });
  });
});

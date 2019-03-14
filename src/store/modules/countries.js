import { of, from, defer } from 'rxjs';
import {
  catchError,
  mergeMap,
  map,
  retry,
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { createPrefix, createAction } from '@store/utils/actionHelpers';
import { transformCountriesResponse } from '@store/utils/dataTransformers';
import countriesApi from '@api/country';


const prefix = createPrefix('countries');

const FETCH_COUNTRIES = prefix('FETCH_COUNTRIES');
const FETCH_COUNTRIES_SUCCESS = prefix('FETCH_COUNTRIES_SUCCESS');
const FETCH_COUNTRIES_FAILURE = prefix('FETCH_COUNTRIES_FAILURE');

export const fetchCountriesData = createAction(FETCH_COUNTRIES);
export const fetchCountriesDataSuccess = createAction(FETCH_COUNTRIES_SUCCESS);
const fetchCountriesDataFailure = createAction(FETCH_COUNTRIES_FAILURE);

const UPDATE_POPULATION = prefix('UPDATE_POPULATION');
export const updatePopulation = createAction(UPDATE_POPULATION);

export const initialState = {
  isFetching: false,
  countries: {
    byCode: {},
    allCodes: [],
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_COUNTRIES_SUCCESS: {
      const { byCode, allCodes } = transformCountriesResponse(state.countries, payload);

      return {
        ...state,
        countries: {
          ...state.countries,
          byCode,
          allCodes,
        },
        isFetching: false,
      };
    }

    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case UPDATE_POPULATION: {
      const { country, population } = payload;
      return {
        ...state,
        countries: {
          ...state.countries,
          byCode: {
            ...state.countries.byCode,
            [country]: {
              ...state.countries.byCode[country],
              population,
            },
          },
        },
      };
    }

    default:
      return state;
  }
};

export const epic = action$ => action$.pipe(
  ofType(FETCH_COUNTRIES),
  mergeMap(() => defer(() => from(countriesApi())).pipe(
    retry(5),
  )),
  map(data => fetchCountriesDataSuccess(data)),
  catchError(() => of(fetchCountriesDataFailure())),
);

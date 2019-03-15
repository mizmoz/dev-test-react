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

const FETCH_DATA = prefix('FETCH_DATA');
const FETCH_DATA_SUCCESS = prefix('FETCH_DATA_SUCCESS');
const FETCH_DATA_FAILURE = prefix('FETCH_DATA_FAILURE');

export const fetchCountriesData = createAction(FETCH_DATA);
export const fetchCountriesDataSuccess = createAction(FETCH_DATA_SUCCESS);
const fetchCountriesDataFailure = createAction(FETCH_DATA_FAILURE);

const CREATE_RECORD = prefix('CREATE_RECORD');
const DELETE_RECORD = prefix('DELETE_RECORD');
export const createPopulationRecord = createAction(CREATE_RECORD);
export const deletePopulationRecord = createAction(DELETE_RECORD);

export const initialState = {
  isFetching: false,
  countries: {
    byCode: {},
    allCodes: [],
  },
  records: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_DATA_SUCCESS: {
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

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case CREATE_RECORD: {
      const { country: { code, name }, population } = payload;
      return {
        ...state,
        records: {
          ...state.records,
          [code]: { code, name, population },
        },
      };
    }

    case DELETE_RECORD: {
      const { code } = payload;
      const { [code]: deleted, ...rest } = state.records;
      return {
        ...state,
        records: rest,
      };
    }

    default:
      return state;
  }
};

export const epic = action$ => action$.pipe(
  ofType(FETCH_DATA),
  mergeMap(() => defer(() => from(countriesApi())).pipe(
    retry(5),
  )),
  map(data => fetchCountriesDataSuccess(data)),
  catchError(() => of(fetchCountriesDataFailure())),
);

export const selectRecords = (state) => {
  const { records } = state;
  return Object.keys(records).map(key => records[key])
    .sort((a, b) => b.population - a.population);
};

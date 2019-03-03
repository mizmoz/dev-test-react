import { createSelector } from 'reselect';
import * as utils from './utils';
import { NAME } from './constants';

const selectState = state => state[NAME];

export const selectCountriesByCode = createSelector(
  selectState,
  state => state.countriesByCode,
);

export const selectLoading = createSelector(
  selectState,
  state => state.loading,
);

export const selectError = createSelector(
  selectState,
  state => state.error,
);

export const selectCountriesByPopulationArray = createSelector(
  selectCountriesByCode,
  countriesByCode => utils.countriesByPopulationArray(countriesByCode),
);

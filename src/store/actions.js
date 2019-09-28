export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';

export const updateCountries = (countries) => {
  return {
    type: UPDATE_COUNTRIES,
    countries,
  };
}

export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';

export const updateCountry = (country) => {
  return {
    type: UPDATE_COUNTRY,
    country,
  };
}

export const DELETE_COUNTRY = 'DELETE_COUNTRY';

export const deleteCountry = (countryId) => {
  return {
    type: DELETE_COUNTRY,
    countryId,
  };
}


export const SELECT_COUNTRY = 'SELECT_COUNTRY';

export const selectCountry = (countryId) => {
  return {
    type: SELECT_COUNTRY,
    countryId,
  };
}
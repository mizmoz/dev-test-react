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

export const deleteCountry = (country) => {
  return {
    type: DELETE_COUNTRY,
    country,
  };
}
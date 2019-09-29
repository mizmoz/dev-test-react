export const UPDATE_COUNTRIES = 'UPDATE_COUNTRIES';

export const updateCountries = (countries) => {
  const type = UPDATE_COUNTRIES;
  return { type, countries };
};

export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';

export const updateCountry = (country) => {
  const type = UPDATE_COUNTRY;
  return { type, country };
};

export const DELETE_COUNTRY = 'DELETE_COUNTRY';

export const deleteCountry = (countryId) => {
  const type = DELETE_COUNTRY;
  return { type, countryId };
};


export const SELECT_COUNTRY = 'SELECT_COUNTRY';

export const selectCountry = (countryId) => {
  const type = SELECT_COUNTRY;
  return { type, countryId };
};

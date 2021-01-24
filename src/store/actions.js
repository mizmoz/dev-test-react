import country from "../api/country";

const upsertCountry = (data) => ({ type: 'UPSERT_COUNTRY', data });
const removeCountry = (code) => ({ type: 'REMOVE_COUNTRY', code });
const loadCountriesStarted = () => ({ type: 'LOAD_COUNTRIES_STARTED' });
const loadCountriesFailed = (error) => ({ type: 'LOAD_COUNTRIES_FAILED', error });
const loadCountriesSuccess = () => ({ type: 'LOAD_COUNTRIES_SUCCESS' });
const editCountry = (code) => ({ type: 'EDIT_COUNTRY', code });

const loadCountries = () => {
  return function(dispatch) {
    dispatch(loadCountriesStarted());

    return country()
      .then((countries) => {
        dispatch(loadCountriesSuccess());
        return countries;
      })
      .catch(e => {
        dispatch(loadCountriesFailed({ message: 'Loading country list. Please wait...' }));
      })
  };
};

export {
    upsertCountry,
    removeCountry,
    loadCountries,
    editCountry
};
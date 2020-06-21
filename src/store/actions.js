export const fetchCountryData = () => {
  return {
    type: 'FETCH_COUNTRY_DATA'
  };
};
export const getPopulation = countryCode => {
  return {
    type: 'GET_POPULATION',
    value: countryCode
  };
};
export const setPopulation = (
  countryCode,
  currentCountryName,
  countryPopulation
) => {
  return {
    type: 'SET_POPULATION',
    countryCode: countryCode,
    currentCountryName: currentCountryName,
    countryPopulation: countryPopulation
  };
};
export const deletePopulation = countryCode => {
  return {
    type: 'DELETE_POPULATION',
    countryCode: countryCode
  };
};
export const setCurrentCountry = (countryCode, countryName) => {
  return {
    type: 'SET_CURR_COUNTRY',
    value: countryCode,
    countryName: countryName
  };
};

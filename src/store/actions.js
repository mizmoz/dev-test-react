export const fetchCountriesComplete = (countries) => ({
  type: 'FETCH_COUNTRIES_COMPLETE',
  countries: countries
})

export const fetchCountriesError = (error) => ({
  type: 'FETCH_COUNTRIES_ERROR',
  error
});

export const selectCountry = countrySelected => ({
  type: 'SELECT_COUNTRY',
  countrySelected
})

export const setPopulation = (country, population) => ({
  type: 'SET_POPULATION',
  country,
  population
})

export const deletePopulation = country => ({
  type: 'SET_POPULATION',
  country,
  population: ''
})
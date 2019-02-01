export const fetchCountriesComplete = (countries) => ({
  type: 'FETCH_COUNTRIES_COMPLETE',
  countries: countries
})

export const fetchCountriesError = (error) => ({
  type: 'FETCH_COUNTRIES_ERROR',
  error
});

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

export const setActiveCountryCode = activeCountryCode => ({
  type: 'SET_ACTIVE_COUNTRY_CODE',
  activeCountryCode
})

export const setActiveCountryPopulation = activeCountryPopulation => ({
  type: 'SET_ACTIVE_COUNTRY_POPULATION',
  activeCountryPopulation
})
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
export const countriesByCode = countries => (
  countries.reduce((acc, country) => ({
    ...acc,
    [country.code]: {
      ...country,
      population: '',
    },
  }), {})
);

export const comparePopulation = (a, b) => (b.population - a.population);

export const filterPopulation = country => (country.population);

export const countriesByPopulationArray = (countries) => {
  const countriesWithPopulation = Object.values(countries).filter(filterPopulation);
  return countriesWithPopulation.sort(comparePopulation);
};

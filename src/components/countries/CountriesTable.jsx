import React from "react";

import { StyledTable, UpdateButton, DeleteButton } from './Styles';

const CountriesTable = ({ countries, setForUpdate, deleteCountry, searchTerm }) => {

  function filteredCountries() {
    let sortedCountries = countries;

    if (searchTerm !== '' || !sortedCountries) {
      const term = searchTerm.toLowerCase()
      return sortedCountries.filter(
        (country) => country.code.toLowerCase() === term || country.name.toLowerCase() === term
      )
    }

    return sortedCountries.sort((a, b) => parseInt(a.population) - parseInt(b.population));
  }

  function handleUpdateClick(country) {
    setForUpdate(country);
  }

  function handleDeleteClick(country) {
    deleteCountry(country);
  }
  
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredCountries().map((country) => (
          <tr key={`country-${country.name}`}>
            <td>{country.name}</td>
            <td>{country.population}</td>
            <td>{country.code}</td>
            <td>
              <span>
                <UpdateButton onClick={() => handleUpdateClick(country)}>Update</UpdateButton>
              </span>
              <span>
                <DeleteButton onClick={() => handleDeleteClick(country)}>Delete</DeleteButton>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
};

export default CountriesTable;
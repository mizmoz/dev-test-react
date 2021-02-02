import React, { useState, useEffect } from 'react';
import Select from 'react-select';

import {
  StyledFormContainer,
  Flexrow,
  FlexColumn,
  FlexColumnCountry,
  FlexColumnLarger,
  Input,
  AddButton,
  SearchInput,
  SearchInputContainer
} from './Styles';

const CountryForm = ({ 
  countries,
  isFetchingCountries,
  addCountry,
  forUpdate,
  handleUpdate,
  setSearchTerm
}) => {

  const [country, setCountry] = useState('');
  const [code, setCode] = useState('');
  const [population, setPopulation] = useState('');
  const [action, setAction] = useState('add');

  useEffect(() => {
    if (!forUpdate) {
      resetForm();
      setAction('add');
      return;
    }

    setPopulation(forUpdate.population);
    setCode(forUpdate.code);
    setCountry(forUpdate.name);
    setAction('update');
  }, [forUpdate])

  const countriesOptions = countries.map((country) => {
    return { label: country.name, value: country.code, isDisabled: action === 'update' }
  })

  function addDisabled() {
    return population === '' || country === '' || code === '';
  }

  function handlePopulationChange(event) {
    setPopulation(event.target.value);
  }

  function handleCountryChange(selectValue) {
    setCountry(selectValue.label);
    setCode(selectValue.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function resetForm() {
    setCountry('');
    setPopulation('');
    setCode('');
  }

  function handleAdd() {
    const newCountry = { name: country, population, code };
    if (action === 'add') {
      addCountry(newCountry, resetForm)

    } else if (action === 'update') {
      handleUpdate(newCountry, resetForm)
    }
  }

  function selectDefault() {
    if (code === '') return null;

    const selected = countries.find((country) => country.code === code);
    return { label: selected.name, value: selected.code };
  }

  return (
    <StyledFormContainer>
      <div>
        <h3 style={{ marginBottom: '14px' }}>Add a country with population</h3>

        <Flexrow>
          <FlexColumnCountry>
            <Select
              value={selectDefault()}
              options={countriesOptions}
              placeholder="Select country"
              isLoading={isFetchingCountries}
              onChange={(selectValue) => handleCountryChange(selectValue)}
              disabled={action === 'update'}
            />
          </FlexColumnCountry>
          <FlexColumn>
            <Input
              value={population}
              placeholder="Enter population"
              type="number"
              onChange={handlePopulationChange}
              min={1}
            />
          </FlexColumn>
          <FlexColumn>
            <AddButton disabled={addDisabled()} onClick={handleAdd}>{action === 'add' ? 'Add Country' : 'Update Country'}</AddButton>
          </FlexColumn>
          <FlexColumnLarger>
            <SearchInputContainer>
              <SearchInput
                placeholder="Search Country by name or code"
                onChange={handleSearchChange} />
            </SearchInputContainer>
          </FlexColumnLarger>
        </Flexrow>
      </div>
    </StyledFormContainer>
  )
}

export default CountryForm;
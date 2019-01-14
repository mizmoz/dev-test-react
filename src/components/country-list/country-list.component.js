import React from "react";
import styled from "styled-components";
import { style } from "../../configs/theme";
import Button from "../app/Button";

const CountryListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  grid-gap: 10px;
  font-size: 1.5rem;
`;

const CountryListHeaderStyled = styled.div`
  font-weight: bold;
  background-color: #2c3e50;
  color: #fff;
  padding: 0.5rem 1rem;
`;

const CountryListTitleStyled = styled.div`
  font-size: 2rem;
  padding: 1.5rem 0;
`;

const CountryList = ({ countryData, handleDelete, handleEdit }) => {
  return countryData.length ? (
    <>
      <CountryListTitleStyled>
        Country list by population
      </CountryListTitleStyled>

      <CountryListStyled>
        {[
          <React.Fragment key="header">
            <CountryListHeaderStyled>Country Name</CountryListHeaderStyled>
            <CountryListHeaderStyled>
              Country Population
            </CountryListHeaderStyled>
            <CountryListHeaderStyled>Actions</CountryListHeaderStyled>
          </React.Fragment>,
          ...countryData.map(({ countryName, population, countryCode }) => (
            <React.Fragment key={countryCode}>
              <div>{countryName}</div>
              <div>{population}</div>
              <div>
                <Button
                  label="✎"
                  color="secondary"
                  onClick={() => handleEdit(countryCode)}
                />
                <Button
                  label="×"
                  color="quaternary"
                  onClick={() => handleDelete(countryCode)}
                />
              </div>
            </React.Fragment>
          ))
        ]}
      </CountryListStyled>
    </>
  ) : (
    <div>
      There is no data about the population of any country. Please use the form
      below to add some.
    </div>
  );
};

export default CountryList;

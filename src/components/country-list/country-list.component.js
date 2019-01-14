import React from "react";
import styled from "styled-components";
import { style } from "../../configs/theme";
import Button from "../app/Button";

const CountryListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const CountryList = ({ countryData, handleDelete }) => {
  return countryData.length ? (
    <>
      <h2>Country list by population</h2>

      <CountryListStyled>
        {[
          <>
            <div>Country Name</div>
            <div>Country Population</div>
            <div>Actions</div>
          </>,
          ...countryData.map(({ countryName, population, countryCode }) => (
            <>
              <div>{countryName}</div>
              <div>{population}</div>
              <div>
                <Button label="✎" color="secondary" />
                <Button
                  label="×"
                  color="quaternary"
                  onClick={() => handleDelete(countryCode)}
                />
              </div>
            </>
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

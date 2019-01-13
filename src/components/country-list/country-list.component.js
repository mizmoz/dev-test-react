import React from "react";

const CountryList = ({ countryData }) => {
  return countryData.length ? (
    <div>
      {countryData.map(({ countryName, population }) => (
        <div>
          {countryName} - {population}
        </div>
      ))}
    </div>
  ) : (
    <div>
      There is no data about the population of any country. Please use the form
      below to add some.
    </div>
  );
};

export default CountryList;

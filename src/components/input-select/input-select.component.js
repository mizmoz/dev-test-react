import React from "react";

const InputSelect = ({ onChange, optionList = [] }) => (
  <select onChange={onChange}>
    {optionList.map(option => (
      <option key={option.code} value={option.code}>
        {option.name}
      </option>
    ))}
  </select>
);

export default InputSelect;

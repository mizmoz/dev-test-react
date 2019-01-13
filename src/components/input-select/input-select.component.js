import React from "react";

const InputSelect = ({ onChange, required, value, optionList = [] }) => (
  <select onChange={onChange} required={required}>
    <option value="">-- select a country --</option>
    {optionList.map(option => (
      <option
        key={option.code}
        value={option.code}
        selected={option.code === value}
      >
        {option.name}
      </option>
    ))}
  </select>
);

export default InputSelect;

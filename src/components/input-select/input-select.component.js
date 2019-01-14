import React from "react";

const InputSelect = ({ onChange, required, value, optionList = [] }) => (
  <select onChange={onChange} required={required} value={value}>
    {optionList.map(option => (
      <option key={option.code} value={option.code}>
        {option.name}
      </option>
    ))}
  </select>
);

export default InputSelect;

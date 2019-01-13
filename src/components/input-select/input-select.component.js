import React from "react";

const InputSelect = ({ optionList = [] }) => (
  <select>
    {optionList.map(option => (
      <option key={option.code} value={option.code}>
        {option.name}
      </option>
    ))}
  </select>
);

export default InputSelect;

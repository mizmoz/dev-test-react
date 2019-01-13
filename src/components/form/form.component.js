import React from "react";
import InputText from "../input-text";
import CountriesList from "../../configs/country";
import InputSelect from "../input-select";
import Button from "../app/Button";
import styled from "styled-components";
import { style } from "../../configs/theme";

const FormStyled = styled.form`
  display: flex;
`;

class Form extends React.Component {
  state = {
    populationValue: 0,
    countryValue: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.refs);
  };

  updatePopulationValue = e => {
    const { value: populationValue } = e.target;
    this.setState({ populationValue });
  };

  updateCountryValue = e => {
    const { value: countryValue } = e.target;
    this.setState({ countryValue });
  };

  render() {
    const inputTextPropList = {
      placeholder: "type in the population number",
      type: "number",
      onChange: this.updatePopulationValue
    };

    const inputSelectPropList = {
      optionList: CountriesList,
      onChange: this.updateCountryValue
    };

    const submitButtonPropList = {
      label: "Add population",
      onClick: () => console.log("I was clicked")
    };

    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <InputSelect {...inputSelectPropList} />
        <InputText {...inputTextPropList} />
        <Button {...submitButtonPropList} />
      </FormStyled>
    );
  }
}

export default Form;

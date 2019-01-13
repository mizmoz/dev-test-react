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
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    const inputTextPropList = {
      placeholder: "type in the population number",
      type: "number"
    };

    const inputSelectPropList = {
      optionList: CountriesList
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

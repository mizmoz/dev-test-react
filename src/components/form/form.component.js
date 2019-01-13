import React from "react";
import InputText from "../input-text";
import CountriesList from "../../configs/country";
import InputSelect from "../input-select";
import Button from "../app/Button";
import styled from "styled-components";
import { style } from "../../configs/theme";
import { connect } from "react-redux";

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
    console.log(this.state);
    this.props.addPopulation(this.state);
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
        <p>Country data: </p>
        <pre>{JSON.stringify(this.props.countryData)}</pre>
        <InputSelect {...inputSelectPropList} />
        <InputText {...inputTextPropList} />
        <Button {...submitButtonPropList} />
      </FormStyled>
    );
  }
}

const mapStateToProps = state => ({
  countryData: state.countryData
});

const mapDispatchToProps = dispatch => {
  return {
    addPopulation: payload =>
      dispatch({
        type: "ADD_POPULATION",
        payload
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

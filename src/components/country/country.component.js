import React from "react";
import InputText from "../input-text";
import CountriesList from "../../configs/country";
import InputSelect from "../input-select";
import Button from "../app/Button";
import styled from "styled-components";
import { style } from "../../configs/theme";
import { connect } from "react-redux";
import CountryList from "../country-list";

const FormStyled = styled.form`
  display: flex;
`;

class Form extends React.Component {
  state = {
    populationValue: 0,
    countryValue: ""
  };
  handleSubmit = e => {
    const { populationValue, countryValue } = this.state;
    if (this.state.countryValue) {
      this.props.addPopulation({
        countryCode: countryValue,
        countryName: CountriesList.filter(
          country => country.code === countryValue
        ).reduce(a => a).name,
        population: populationValue
      });
      this.setState({
        countryValue: "",
        populationValue: 0
      });
    }

    e.preventDefault();
  };

  updatePopulationValue = e => {
    const { value: populationValue } = e.target;
    this.setState({ populationValue });
  };

  updateCountryValue = e => {
    const countryValue = e.target.value.trim();
    this.setState({ countryValue });
  };

  render() {
    const { countryData } = this.props;

    const inputTextPropList = {
      placeholder: "type in the population number",
      type: "number",
      onChange: this.updatePopulationValue,
      value: this.state.populationValue
    };

    const inputSelectPropList = {
      optionList: CountriesList,
      onChange: this.updateCountryValue,
      required: "required",
      value: this.state.countryValue
    };

    const submitButtonPropList = {
      label: "Add population",
      onClick: () => console.log("I was clicked")
    };

    return (
      <>
        <FormStyled onSubmit={this.handleSubmit}>
          <InputSelect {...inputSelectPropList} />
          <InputText {...inputTextPropList} />
          <Button {...submitButtonPropList} />
        </FormStyled>
        <CountryList countryData={countryData} />
      </>
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

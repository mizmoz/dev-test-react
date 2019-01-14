import React from "react";
import InputText from "../input-text";
import CountriesList from "../../configs/country";
import InputSelect from "../input-select";
import Button from "../app/Button";
import styled from "styled-components";
import { style } from "../../configs/theme";
import { connect } from "react-redux";
import CountryList from "../country-list";
import { addPopulation, deletePopulation } from "./country.action";

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

  handleDelete = countryCode => {
    console.log(`I want to delete the country with code: ${countryCode}`);
    this.props.deletePopulation(countryCode);
  };

  handleEdit = countryCode => {
    console.log(`I want to edit the country with code: ${countryCode}`);
    // this.props.deletePopulation(countryCode);
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
        <CountryList
          countryData={countryData}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  countryData: state.countryData
});

const mapDispatchToProps = dispatch => {
  return {
    addPopulation: payload => dispatch(addPopulation(payload)),
    deletePopulation: payload => dispatch(deletePopulation(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

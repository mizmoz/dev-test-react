import React from "react";
import { connect } from "react-redux";
import { updatePopulation, deletePopulation } from "../../actions/index";
import { COUNTRY_UPDATED, COUNTRY_DELETED } from "../../configs/messages";
import Dropdown from './Dropdown';
import InputText from './InputText';
import Button from './Button';
import Message from './Message';
import CountriesList from './CountriesList';

const mapStateToProps = state => {
  return { 
      selected_country: state.selected_country,
      selected_population: state.selected_population,
   };
};

function mapDispatchToProps(dispatch) {
  return {
    updatePopulation: (country, population, message, message_color) => dispatch(updatePopulation(country, population, message, message_color)),
    deletePopulation: (country, population, message, message_color) => dispatch(deletePopulation(country, population, message, message_color))    
  };
};
const FormBlock = ({...props }) => (
    <div>
      <InputText></InputText>
      <Dropdown></Dropdown>
      <Button label="Update" color="primary" onClick={(e) => props.updatePopulation(props.selected_country, props.selected_population, COUNTRY_UPDATED, "color.primary")}>Update</Button>
      <Button label="Erase" color="quaternary" onClick={(e) => props.deletePopulation(props.selected_country, '', COUNTRY_DELETED, "color.primary")}>Erase</Button>
      <Message></Message>
      <CountriesList></CountriesList>
    </div>
);

const Form = connect(
  mapStateToProps, 
  mapDispatchToProps
)(FormBlock);
export default Form;

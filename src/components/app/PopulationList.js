import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {DELETE_POPULATION} from "../../store/actions";

const DeleteButton = styled.button`
  padding: 20px;
  background-color: red;
  color: white;
  border-radius: 5px;
`;
DeleteButton.displayName = 'DeleteButton';

const List = styled.ul`
  list-style: none;
  
  li {
    display: flex;
    align-items: center;
    
    span, button{
      flex: 1;
    }
  }
`;


export const PopulationList = ({populationList, deletePopulation}) => {
  return (
    <List>
      {populationList
        .sort((a,b) =>(a.population - b.population))
        .map(({country, population}) => (
          <li key={country}>
            <span>Country: {country}<br/> Population: {population}</span>
            <DeleteButton onClick={() => deletePopulation(country)}>delete</DeleteButton>
          </li>
        ))}
    </List>
  )
};

PopulationList.propTypes = {
  countryList: PropTypes.array,
  deletePopulation: PropTypes.func
}

const mapStateToProps = (state) => ({
  populationList: state.populationList
});

const mapDispatchToProps = (dispatch) => ({
  deletePopulation: (country) => dispatch({type: DELETE_POPULATION, payload: country}),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopulationList)

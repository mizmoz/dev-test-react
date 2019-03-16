import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {DELETE_POPULATION} from "./actions";

const DeleteButton = styled.button`
  padding: 20px;
  background-color: red;
  color: white;
  border-radius: 5px;
`;

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


const CountryList = ({populationList, deletePopulation}) => {
  return (
    <List>
      {populationList
        .sort((a,b) =>(a - b))
        .map(({country, population}) => (
          <li key={country}>
            <span>Country: {country}<br/> Population: {population}</span>
            <DeleteButton onClick={() => deletePopulation(country)}>delete</DeleteButton>
          </li>
        ))}
    </List>
  )
};

const mapStateToProps = (state) => ({
  populationList: state.populationList
});

const mapDispatchToProps = (dispatch) => ({
  deletePopulation: (country) => dispatch({type: DELETE_POPULATION, payload: country}),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryList)

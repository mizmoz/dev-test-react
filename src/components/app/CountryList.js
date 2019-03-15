import React from 'react';
import styled from 'styled-components';

const DeleteButton = styled.button`
  padding: 20px;
  background-color: red;
  color: white;
  border-radius: 5px;
`

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

const list = [
  {
    country: 'england',
    population: 1
  },
  {
    country: 'france',
    population: 2
  },
  {
    country: 'germany',
    population: 3
  }
]

const CountryList = () => (
  <List>
    {list
      .sort((a,b) =>(a - b))
      .map(({country, population}) => (
        <li>
          <span>Country: {country} Population: {population}</span>
          <DeleteButton>delete</DeleteButton>
        </li>
      ))}
  </List>
);


export default CountryList

import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ArrowDown from '../../assets/down-arrow.svg'
import {CountryI} from '../interfaces'
import {setSelectedCountry} from '../../redux/actions'
import {getCountries} from '../../modules/index'


const Sdiv = styled.div`
min-width:300px;
`


const DropDownHeader = styled.div`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  background: #ffffff;
  text-align:left;
  cursor:pointer;
`;


const Sul = styled.ul`
list-style-type:none;
overflow:hidden;

> li{
    border-bottom:solid thin #fcfcfc;
    margin:0px;
    padding:10px;
    text-align:left;
    cursor:pointer;
}

li:hover{
    background:#f6f6f6;
}

li:last-child{
    border-bottom:0;
    margin:0px;
    padding:10px;
}`

const MainContainer = styled.div`
    min-width:300px;
    padding:10px;
    flex-direction:column;
`


const Dropdown = ():JSX.Element=>{

    useEffect( ()=>{
        getCountries()
      },[])
    

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const countries = useSelector((state:any)=>state.countries)

    const onOptionClicked = (value:any) => () => {
        setSelectedCountry(value)
        setIsOpen(false);
    };
   return <MainContainer>
       <DropDownHeader onClick={toggling} >
       <img src={ArrowDown} alt="React Logo" width="40px" height="20px" style={{marginTop:"10px"}}/> {countries.selected.name}
       </DropDownHeader>
       {isOpen && (
       <Sdiv>      
        <Sul>
            {countries.all.map((country:CountryI,i:number)=><li key={i} onClick={onOptionClicked(country)}> {country.name}</li>)}
        </Sul>
    </Sdiv>
       )}
    </MainContainer>
}

export default Dropdown
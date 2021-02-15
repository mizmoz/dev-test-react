import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Dropdown from '../dropdown'
import styled from "styled-components"
import {deleteCountry, updateCountry} from '../../redux/actions'
import { SET_SELECTED_COUNTRY } from '../../redux/contstants'

const FormContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`

const Button = styled.button`
padding:10px;
font-weight:bold;
font-size:12;
text-align:center;
min-width:120px;
border-radius:5px;
margin:10px;
flex-direction:row;
background-color:#00b300;
color:white;
border:0;
cursor:pointer;
`

const FormGroup = styled.div`
flex-direction:column;
min-width:300px;
margin: 10px 10px 0 10px;
`;

const Label = styled.label`
margin-bottom: 0.5em;
display: block;
text-align:left;
font-size:10px;
`;


const Input = styled.input`
padding: 0.5em;
border: none;
border-radius: 3px;
margin-bottom: 0.5em;
border:solid thin #9d9d9d;
min-width:300px;
flex-direction:start;
`;



const Form = ()=>{
    const country = useSelector((state:any)=>state.countries.selected)
    const dispatch = useDispatch()
    const [curName, setCurName]:any = useState()
    const [curPop, setCurPop]:any = useState()
    const [curCode, setCurCode]:any = useState()

    useEffect(()=>{
        setCurName(country.name)
        setCurPop(country.population)
        setCurCode(country.code)
    },[country, curName,curPop])

    const setCountry = ()=>{
        updateCountry({
            name:name,
            population:population,
            code:curCode
        })

        alert(`updating country ${country.name} to ${curName} and set population to ${curPop}`);
        dispatch({
            type:SET_SELECTED_COUNTRY,
            payload:{name:"Select Country",population:null}
        })
    }
    const delCountry = ()=>{
        try{
        deleteCountry(curCode)
        alert(`deleting ${country.name} ?`);
        dispatch({
            type:SET_SELECTED_COUNTRY,
            payload:{name:"Select Country",population:null}
        })
        }catch(e){
            console.log(e)
        }
    }

      const useInput = (type:any,val:any)=> {
          useEffect(()=>{
            setValue(val)
          },[val])
        const [value, setValue]:any = useState()
        const input = <Input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
      }
      const [name, nameInput] = useInput({ type: "text" },curName === "Select Country" ? "":curName);
      const [population, populationInput] = useInput({ type: "text" },curPop === null? "":curPop );
    return <FormContainer>
        <Dropdown />
        <FormGroup>
            <Label >Name</Label> 
            {nameInput}
        </FormGroup>

        <FormGroup>
            <Label >Population</Label>     
            {populationInput}
 </FormGroup>

        <Button onClick={setCountry}> Update</Button>
        <Button onClick={delCountry}> Delete</Button>
    </FormContainer>
}

export default Form

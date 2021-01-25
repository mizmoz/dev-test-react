import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import countryapi from '../../../api/country';
import { setCountriesList, deleteCountryItem } from '../../../store/actions/index';
import Select from '../Select';
import { FormGroup, Label, Input, ErrorMessage, SuccessMessage } from '../forms/FormGroup';
import Button from '../Button';

const CountriesComponent = () => {
    let countries = useSelector(state => state.countries);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [showSuccessMessage, setSuccessMessage] = useState(false);
    const [selected, setSelected] = useState(0);
    const [currentValue, setCurrentValue] = useState({});
    const [population, setPopulation] = useState(0);

    const rules = [
        { rule: val => Number(val) < 0, message: 'Population should not be a negative number.'},
        { rule: val => isNaN(val), message: 'Population should be a number.'}
    ];

    const validatePopulation = (value) => {
        let hasError = false;
        let errorMessage = "";

        for(let key in rules) {
            if(rules[key].rule(value)) {
                errorMessage = rules[key].message;
                hasError = true;
                break;
            }
        }

        hasError ? setMessage(errorMessage) : setMessage("");

        return hasError;
    };

    const getCountries = async () => {
        const countries_list = await retry(countryapi.countries);
        dispatch(setCountriesList(countries_list));
    };

    const updateCountries = () => {
        dispatch(setCountriesList(countries));
    };

    const updateSelectedCountry = (e) => {
        setSelected(e.target.value);
        setCurrentValue({... countries[e.target.value]});
        countries[e.target.value].population ? setPopulation(countries[e.target.value].population) : setPopulation(0);
    };

    const updatePopulation = (e) => {
        validatePopulation(e.target.value);
        setPopulation(e.target.value);
    };

    const savePopulation = () => {
        const newCountry = { ...countries[selected], population: Number(population) };
        countries[selected] = newCountry;
        updateCountries(countries);
        setSuccessMessage(true);
        
        setSelected(countries.findIndex(item => item.name == currentValue.name));
        setTimeout(() => {
            setSuccessMessage(false);
        }, 2000);
    };

    const deletePopulation = (e) => {
        dispatch(deleteCountryItem(countries, selected));

        countries[e.target.value] && countries[e.target.value].population 
            ? setPopulation(countries[e.target.value].population) : setPopulation(0);
    };

    const retry = (func, max = 5, retries = 0) => {
        return new Promise((resolve, reject) => {
            func()
                .then(data => { resolve(data) })
                .catch(e => {
                    resolve(retry(func, max, retries++));
                }) 
           
        });  
    };
    
    useEffect(() => {
        getCountries();
    }, []);

    return (
        <div>
            <FormGroup>
                <Label htmlFor="label">Country</Label>
                <Select
                    value={selected} 
                    onChange={updateSelectedCountry} 
                    data={countries} 
                />
                <br/><br/>
                <Label htmlFor="label">Population</Label>
                <Input
                    value={population}
                    onChange={updatePopulation}
                    id="label"
                />
                { message.length > 0 ? <ErrorMessage>{ message }</ErrorMessage> : <React.Fragment /> }
                { showSuccessMessage ? <SuccessMessage>Successfully saved!</SuccessMessage> : <React.Fragment /> }

                <Button label="save" disabled={message.length > 0} color="dark" onClick={savePopulation}/>
                <Button label="delete" color="light" ml="1px" onClick={deletePopulation}/>
            </FormGroup>
        </div>
    );
};

export default connect()(CountriesComponent);
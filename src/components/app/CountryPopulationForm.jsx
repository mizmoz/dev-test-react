import React, { useEffect, useState } from 'react'
import { COUNTRY_CREATE, COUNTRY_READ, COUNTRY_UPDATE } from '../../store/actionTypes'
import Button from '../../ui/Button'
import Span from '../../ui/Span'
import CountriesDropdown from './CountriesDropdown'
import { connect } from "react-redux"
import Input from '../../ui/Input'

const CountryPopulationForm = props => {
    const { countryPopulation, countryPopulations, onCreate, onRead, onUpdate } = props

    const [selectedCountry, setSelectedCountry] = useState()
    const [population, setPopulation] = useState(0)

    useEffect(() => {
        setPopulation(countryPopulation.population || 0)
    }, [countryPopulation])

    useEffect(() => {
        onRead(selectedCountry)
    }, [countryPopulations])

    const onLoadHandler = (country) => {
        setSelectedCountry(country)
        onRead(country)
    }

    const onCountriesChange = event => {
        const country = JSON.parse(event.target.value)
        setSelectedCountry(country)
        onRead(country)

    }

    const onPopulationChangeHandler = event => {
        const value = event.target.value
        setPopulation(value < 0 ? 0 : value)
    }

    const onButtonClickHandler = event => {
        if (countryPopulation.country) {
            const updatedCountryPopulation = { ...countryPopulation, population }

            onUpdate(updatedCountryPopulation)
        } else {
            const countryPopulation = { country: selectedCountry, population }
            onCreate(countryPopulation)
        }
    }

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: '120px',
    }

    return (
        <div style={style}>
            <div style={{ height: "55px", display: "flex", alignItems: "center" }}>
                <label htmlFor="countriesDropdown" style={{display: "inline-block", width: "100px"}}><Span>Countries: </Span></label>
                <CountriesDropdown id="countriesDropdown" onLoad={(country) => onLoadHandler(country)} onChange={(event) => onCountriesChange(event)}></CountriesDropdown>
            </div>
            {selectedCountry && <>
                <div>
                    <label htmlFor="populationInput" style={{display: "inline-block", width: "100px"}}><Span>Population: </Span></label>
                    <Input min="0" id="populationInput" type="number" value={population} onChange={onPopulationChangeHandler} />
                    <Button label="Save" onClick={onButtonClickHandler} />
                </div>
            </>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        countryPopulation: state.countryPopulation,
        countryPopulations: state.countryPopulations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreate: (countryPopulation) => dispatch({ type: COUNTRY_CREATE, countryPopulation }),
        onRead: (country) => dispatch({ type: COUNTRY_READ, country }),
        onUpdate: (countryPopulation) => dispatch({ type: COUNTRY_UPDATE, countryPopulation })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPopulationForm)
import React, { useEffect, useState } from 'react'
import { COUNTRY_DATA_CREATE, COUNTRY_DATA_READ, COUNTRY_DATA_UPDATE } from '../../store/actionTypes'
import Button from '../../ui/Button'
import Span from '../../ui/Span'
import CountriesDropdown from './CountriesDropdown'
import { connect } from "react-redux"
import Input from '../../ui/Input'

const CountryDataForm = props => {
    const { countryData, countryDataList, onCreate, onRead, onUpdate } = props

    const [selectedCountry, setSelectedCountry] = useState()
    const [population, setPopulation] = useState(0)

    useEffect(() => {
        setPopulation(countryData.population || 0)
    }, [countryData])

    useEffect(() => {
        onRead(selectedCountry)
    }, [countryDataList])

    const onLoadHandler = (country) => {
        setSelectedCountry(country)
        onRead(country)
    }

    const onCountriesChange = event => {
        const country = event.value
        setSelectedCountry(country)
        onRead(country)

    }

    const onPopulationChangeHandler = event => {
        const value = Number.parseInt(event.target.value)
        setPopulation(value < 0 ? 0 : value)
    }

    const onButtonClickHandler = event => {
        if (countryData.country) {
            const updatedCountryPopulation = { ...countryData, population }

            onUpdate(updatedCountryPopulation)
        } else {
            const countryData = { country: selectedCountry, population }
            onCreate(countryData)
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ height: "55px", display: "inline-flex", alignItems: "center" }}>
                {selectedCountry && <label htmlFor="countriesDropdown" style={{ display: "inline-block", width: "100px" }}><Span>Countries: </Span></label>}
                <CountriesDropdown id="countriesDropdown" onLoad={(country) => onLoadHandler(country)} onChange={(event) => onCountriesChange(event)}></CountriesDropdown>
            </div>
            {selectedCountry &&
                <div style={{ display: 'inline-block' }}>
                    <label htmlFor="populationInput" style={{ display: "inline-block", width: "100px" }}><Span>Population: </Span></label>
                    <Input min="0" id="populationInput" type="number" value={population} onChange={onPopulationChangeHandler} />
                    <Button label="Save" onClick={onButtonClickHandler} />
                </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        countryData: state.countryData,
        countryDataList: state.countryDataList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreate: (countryData) => dispatch({ type: COUNTRY_DATA_CREATE, countryData }),
        onRead: (country) => dispatch({ type: COUNTRY_DATA_READ, country }),
        onUpdate: (countryData) => dispatch({ type: COUNTRY_DATA_UPDATE, countryData })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDataForm)
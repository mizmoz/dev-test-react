import React, { useEffect, useState } from 'react'
import promisedCountries from '../../api/country'
import Dropdown from '../../ui/Dropdown';
import Span from '../../ui/Span'
import Spinner from '../../ui/Spinner'
import promiseRetry from "promise-retry";

const CountriesDropdown = ({ onChange, onLoad, ...props }) => {
    const [countries, setCountries] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState()

    useEffect(() => {
        promiseRetry((retry, number) => {
            console.log('attempt number', number);

            if (number === 1) {
                setLoading(true)
            }

            return promisedCountries()
                .catch(retry);
        }).then(countries => {
            const countriesAsOptions = countries.map(country => (
                { value: country,
                label: <span><img src={`https://www.countryflags.io/${country.iso2}/flat/16.png`}/> <Span>{country.name}</Span></span> }
            )
            )
                .sort((a, b) => a.value.name.localeCompare(b.value.name))
            setCountries(countriesAsOptions)

            if (countriesAsOptions[0]) {
                onLoad(countriesAsOptions[0].value)
            }

            setLoading(false)
        }, error => {
            setError(error)
            setLoading(false)
        });
    }, [])

    const onDropdownChangeHandler = event => {
        onChange(event)
    }

    return (
        <>
            {loading && <Span><Spinner></Spinner></Span>}
            {error && <Span>{error}</Span>}
            {!loading && !error && countries && <div style={{width: "450px"}}><Dropdown options={countries} onChange={(event) => onDropdownChangeHandler(event)} {...props}></Dropdown ></div>}
        </>
    )
}

export default CountriesDropdown
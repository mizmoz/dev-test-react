import React, { useEffect, useState } from 'react'
import promisedCountries from '../../api/country'
import Dropdown from '../../ui/Dropdown';
import Span from '../../ui/Span'
import promiseRetry from "promise-retry";

const CountriesDropdown = ({ onChange, onLoad, ...props }) => {
    const [countries, setCountries] = useState();
    const [loading, setLoading] = useState();
    const [loadingMessage, setLoadingMessage] = useState("Loading");
    const [error, setError] = useState()

    useEffect(() => {
        promiseRetry((retry, number) => {
            console.log('attempt number', number);

            if (number === 1) {
                setLoading(true)
            }

            setLoadingMessage(prev => (
                prev.concat('.')
            ))

            return promisedCountries()
                .catch(retry);
        }).then(countries => {
            const countriesAsOptions = countries.map(country => ({ value: country, label: country.name }))
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
            {loading && <Span>{loadingMessage}</Span>}
            {error && <Span>{error}</Span>}
            {!loading && !error && countries && <Dropdown options={countries} onChange={(event) => onDropdownChangeHandler(event)} {...props}></Dropdown >}
        </>
    )
}

export default CountriesDropdown
import React from 'react'
import CountryDataForm from "./CountryDataForm"
import CountryDataList from "./CountryDataList"

const CountryData = props => {
    return (
        <div>
            <div>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <CountryDataForm></CountryDataForm>
                </div>
            </div>
            <div>
                <CountryDataList></CountryDataList>
            </div>
        </div>
    )
}

export default CountryData
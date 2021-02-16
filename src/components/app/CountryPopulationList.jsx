import React, { useEffect, useState } from 'react'
import { COUNTRY_DELETE } from '../../store/actionTypes'
import { connect } from "react-redux"
import Span from '../../ui/Span'
import styled from 'styled-components';
import { style } from '../../configs/theme';

const RecordList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin: ${style('marginHalf')};
        padding: ${style('paddingHalf')};
        box-shadow: ${style('shadow.small')};
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      }
        
    span:first-child {
        width: 250px;
        display: flex;
        justify-content: start;
    }
`;

const CountryPopulationList = props => {
    const { countryPopulations, onDelete } = props
    const [sortedCountryPopulations, setSortedCountryPopulations] = useState()

    const onClickHandler = event => {
        onDelete(event)
    }

    useEffect(() => {
        setSortedCountryPopulations(countryPopulations.sort((a, b) =>  b.population - a.population || a.country.name.localeCompare(b.country.name)))

    }, [countryPopulations])

    return (
        <>
            {sortedCountryPopulations && <RecordList>
                {sortedCountryPopulations.map(el => <li key={el.country.code} onClick={() => onClickHandler(el.country)}>
                    <Span>{el.country.name}</Span>
                    <Span>{el.population}</Span>
                    <Span>x</Span>
                </li>)}
            </RecordList>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        countryPopulations: state.countryPopulations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (country) => dispatch({ type: COUNTRY_DELETE, country }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPopulationList)
import React from 'react'
import CountryPopulationForm from "./CountryPopulationForm"
import CountryPopulationList from "./CountryPopulationList"
import H1 from '../../ui/H1';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const FixedDiv = styled.div`
    position: fixed;
    top: 0;
    max-width: ${style('width.max')};
    width: 100%;
    background-color: ${props => props.theme.color.background};
    box-shadow: ${style('shadow.small')};
    padding: ${style('paddingHalf')};
`

const CountryPopulation = props => {
    return (
        <div>
            <FixedDiv>
                <div>
                    <H1>Country Population</H1>
                    <CountryPopulationForm></CountryPopulationForm>
                </div>
            </FixedDiv>
            <div style={{ marginTop: "235px" }}>
                <CountryPopulationList></CountryPopulationList>
            </div>
        </div>
    )
}

export default CountryPopulation
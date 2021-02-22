import React, { useEffect, useState } from 'react'
import { COUNTRY_DATA_UPDATE, COUNTRY_DATA_DELETE } from '../../store/actionTypes'
import { connect } from "react-redux"
import Span from '../../ui/Span';
import styled from 'styled-components';
import { style } from '../../configs/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faMinusSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown, faCaretUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import Input from '../../ui/Input'

const RecordTable = styled.table`
    width: 100%;
`

const Icon = styled.div`
    width: 48px;
    height: 48px;
    cursor: pointer;
    clip-path: circle(33% at 50% 50%);
    background-color: lightblue;
    ${props => !props.selected ? `background-image: url(https://www.countryflags.io/${props.country.iso2}/flat/48.png);` : ''}
`

const Hint = styled.small`
    color: gray;
    font-weight: normal;
    padding: 0 ${style('paddingHalf')};
`

const CountryDataList = props => {
    const { countryDataList, onUpdate, onDelete } = props
    const [sortAsc, setSortAsc] = useState(false)
    const [sortedCountryDataList, setSortedCountryDataList] = useState(countryDataList.sort((a, b) => sortAsc ? a.population - b.population : b.population - a.population || a.country.name.localeCompare(b.country.name)))

    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const onTrashClickHandler = event => {
        setShowConfirmDelete(true)
    }

    const onDeleteHandler = event => {
        selected.forEach(el => {
            onDelete(el)
        })
        setSelected([])
    }

    useEffect(() => {
        const sorted = countryDataList.sort((a, b) => sortAsc ? a.population - b.population : b.population - a.population || a.country.name.localeCompare(b.country.name))
        setSortedCountryDataList(sorted)

    }, [countryDataList, sortAsc])

    const onSortHandler = event => {
        setSortAsc(prev => !prev)
    }

    const [selected, setSelected] = useState([])
    const onSelectHandler = event => {
        setShowConfirmDelete(false)

        if (event === 'all') {
            setSelected(sortedCountryDataList.map(el => el.country))
        } else if (event === 'none') {
            setSelected([])
        } else {
            setSelected(prev => {
                if (prev.find(el => el.code === event.code)) {
                    return prev.filter(el => el.code !== event.code)
                } else {
                    return [...prev, event]
                }
            })
        }
    }

    const [selectedForEdit, setSelectedForEdit] = useState()
    const [population, setPopulation] = useState(0)

    const onPopulationChangeHandler = event => {
        const value = Number.parseInt(event.target.value)
        setPopulation(value < 0 ? 0 : value)
    }

    return (
        <>
            {sortedCountryDataList && <RecordTable>
                <thead>
                    {sortedCountryDataList.length ? <tr style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <th style={{ width: "50px", cursor: "pointer" }}
                            onClick={() => onSelectHandler(selected.length ? 'none' : 'all')}
                        >
                            {selected.length ? selected.length === sortedCountryDataList.length ? <FontAwesomeIcon icon={faCheckSquare} /> : <FontAwesomeIcon icon={faMinusSquare} /> : <FontAwesomeIcon icon={faSquare} />}
                        </th>
                        <th style={{ display: "inline-flex", justifyContent: "flex-start", width: "400px" }}>
                            {selected.length ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div style={{ padding: "10px", cursor: "pointer" }} onClick={onTrashClickHandler}><FontAwesomeIcon icon={faTrashAlt} /></div>
                                {showConfirmDelete && <div>
                                    <button style={{ margin: "5px" }} onClick={() => setShowConfirmDelete(false)}>Cancel</button>
                                    <button style={{ margin: "5px" }} onClick={onDeleteHandler}>Delete</button>
                                </div>}
                            </div> :
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                    <Span>Country</Span>
                                    <Hint>Select countries to delete</Hint>
                                </div>}
                        </th>
                        <th style={{ display: "inline-flex", justifyContent: "flex-start", width: "180px", alignItems: "center", cursor: "pointer" }}
                            onClick={onSortHandler}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <div>
                                    <Span>Population</Span> {sortAsc ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
                                </div>
                                <Hint>Click a population to edit</Hint>
                            </div>
                        </th>
                    </tr> : <></>}
                </thead>
                <tbody>
                    {sortedCountryDataList.map(el => <tr style={{ display: "flex", justifyContent: "center", alignItems: "center" }} key={el.country.code}>
                        <td style={{ display: "inline-flex", justifyContent: "flex-start", alignItems: "center", cursor: "pointer", width: "50px" }}
                            onClick={() => onSelectHandler(el.country)}>
                            <Icon country={el.country} selected={selected.findIndex(sel => sel.code === el.country.code) > -1}>
                                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    {selected.findIndex(sel => sel.code === el.country.code) > -1 && <FontAwesomeIcon icon={faCheck} />}
                                </div>
                            </Icon>
                        </td>
                        <td style={{ width: "400px" }}>
                            <Span style={{ cursor: "pointer" }} onClick={() => onSelectHandler(el.country)}>{el.country.name}</Span>
                        </td>
                        <td style={{ cursor: "pointer", width: "180px" }} onClick={() => setSelectedForEdit(el.country)}>
                            {selectedForEdit?.code === el.country.code ?
                                <Input min="0" autoFocus type="number" value={population}
                                    onFocus={() => setPopulation(el.population)}
                                    onChange={onPopulationChangeHandler}
                                    onBlur={() => { onUpdate({ ...el, population: population }); setSelectedForEdit(null); setPopulation(0) }} />
                                : <Span>{el.population}</Span>}</td>
                    </tr>)}
                </tbody>
            </RecordTable>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        countryDataList: state.countryDataList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: (countryData) => dispatch({ type: COUNTRY_DATA_UPDATE, countryData }),
        onDelete: (country) => dispatch({ type: COUNTRY_DATA_DELETE, country }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDataList)
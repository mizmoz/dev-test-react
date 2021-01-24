import {ADD_COUNTRY, DELETE_COUNTRY, SELECT_COUNTRY, UPDATE_COUNTRY} from './actionTypes'

let nextToId = 0
export const addCountry = payload => ({
    type: ADD_COUNTRY,
    payload: {
        id: ++nextToId,
        payload
    }
})

export const updateCountry = payload => ({
    type: UPDATE_COUNTRY,
    payload: {
        data: payload.data,
        id: payload.id
    }
})

export const deleteCountry = payload => ({
    type: DELETE_COUNTRY,
    payload: payload
})

export const selectCountry = id => ({
    type: SELECT_COUNTRY,
    payload: {
        id
    }
})
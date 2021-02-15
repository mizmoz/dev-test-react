import store from './store'
import { DEL_COUNTRIES, SET_COUNTRIES, SET_SELECTED_COUNTRY, UPDATE_COUNTRY } from './contstants'
import { CountryI } from '../components/interfaces'

export const setCountries = (payload:CountryI[])=>{
    store.dispatch({
        type:SET_COUNTRIES,
        payload:payload
    })
}

export const setSelectedCountry = (payload:CountryI) =>{
    store.dispatch({
        type:SET_SELECTED_COUNTRY,
        payload:payload
    })
}

export const deleteCountry =  (payload:string) =>{
        store.dispatch({
            type:DEL_COUNTRIES,
            payload:payload
        })
}


export const updateCountry =  (payload:CountryI) =>{
    store.dispatch({
        type:UPDATE_COUNTRY,
        payload:payload
    })
}
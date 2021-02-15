import { CountryI } from '../../components/interfaces'
import {DEL_COUNTRIES, SET_COUNTRIES, SET_SELECTED_COUNTRY, UPDATE_COUNTRY} from '../contstants'
const initialState = {
        all:[],
        selected:{name:"Select Country"}
}

const CountriesReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case SET_COUNTRIES:
            return {
                ...state,
                all:action.payload
            }
            case SET_SELECTED_COUNTRY:
                return {
                    ...state,
                    selected:action.payload
            }
            case UPDATE_COUNTRY:
                console.log("update")
                console.log(action.payload)
                return {
                    ...state,
                    all:state.all.map((item:CountryI) => item.code === action.payload.code ? action.payload:item)
            }
            case DEL_COUNTRIES:

                return {
                    ...state,
                    all:state.all.filter((item:CountryI, index) => item.code !== action.payload)
                  }
            default:return state
    }
}

export default CountriesReducer
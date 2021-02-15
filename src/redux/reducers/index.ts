import {combineReducers} from 'redux'

import countriesReducer from './countries'

const mainReducer = combineReducers({
 countries:countriesReducer
})

export default mainReducer
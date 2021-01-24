
import {ADD_COUNTRY, DELETE_COUNTRY, UPDATE_COUNTRY, SELECT_COUNTRY} from '../actionTypes'

const initialState = {
      population: "",
      countryDdData: [],
      data: [],
      selected: null,
      isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY: {
      const {payload} = action.payload
      return {
        ...state,
        data: [...state.data, payload]
      }
    }
    case UPDATE_COUNTRY: {
      const {data, id} = action.payload
      let copy = [...state.data]
      const findRecord = copy.findIndex(d => d.id === id)
      copy[findRecord] = data
      return {
        ...state,
        data: copy
      }
    }
    case DELETE_COUNTRY: {
      const id = action.payload
      let copy = [...state.data]
      const findRecord = copy.findIndex(d => d.id === id)
      copy.splice(findRecord, 1)
      return {
        ...state,
        data: copy 
      }
    }
    case SELECT_COUNTRY: {
      const {id} = action.payload
      return {
        ...state, 
        selected: {...state.data.find((d) => d.id === id)}
      }
    }
    default: {
      return state;
    }
  }
}
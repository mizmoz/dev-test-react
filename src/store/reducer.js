import { COUNTRY_DATA_CREATE, COUNTRY_DATA_READ, COUNTRY_DATA_UPDATE, COUNTRY_DATA_DELETE } from './actionTypes'

export const getInitialState = () => ({
  // initial state...
  countryData: { country: null, population: 0 },
  countryDataList: []
});

export default (state, action) => {
  switch (action.type) {
    case COUNTRY_DATA_CREATE: {
      const { countryData } = action
      return {
        ...state,
        countryDataList: [...state.countryDataList, countryData]
      }
    }
    case COUNTRY_DATA_READ: {
      const { country } = action
      return {
        ...state,
        countryData: { ...state.countryDataList.find(el => el.country.code === country.code) }
      }
    } case COUNTRY_DATA_UPDATE: {
      const { countryData } = action
      let countryDataList = [...state.countryDataList]
      const index = countryDataList.findIndex(el => el.country.code === countryData.country.code)
      if (index > -1) {
        countryDataList[index] = countryData
      }
      return {
        ...state,
        countryDataList: countryDataList
      }
    }
    case COUNTRY_DATA_DELETE: {
      const { country } = action

      let countryDataList = [...state.countryDataList]
      const index = countryDataList.findIndex(el => el.country.code === country.code)
      if (index > -1) {
        countryDataList.splice(index, 1)
      }
      return {
        ...state,
        countryDataList: countryDataList
      }
    }

    default: {
      return state;
    }
  }
};

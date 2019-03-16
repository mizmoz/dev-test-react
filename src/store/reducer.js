import countries from '../configs/country';
import { ADD_POPULATION, DELETE_POPULATION } from "../components/app/actions";

export const getInitialState = () => ({
  countryList:  countries,
  populationList: []
});



export default (state, action) => {

  switch(action.type){
    case ADD_POPULATION:
      return {
        ...state,
        populationList: [...state.populationList, action.payload]
      };

    case DELETE_POPULATION:
      const updatedPopulations = state.populationList.filter((country) => country.country !== action.payload);
      return {
        ...state,
        populationList: updatedPopulations
      };

    default:
      return state;
  }
};

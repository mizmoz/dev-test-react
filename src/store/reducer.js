import countries from '../configs/country';
import { ADD_POPULATION, DELETE_POPULATION } from "./actions";

export const getInitialState = () => ({
  countryList:  countries,
  populationList: []
});



export default (state, action) => {

  switch(action.type){

    case ADD_POPULATION:
      const index = state.populationList.map(population => population.country).indexOf(action.payload.country);

      if(index !== -1){
        const updatedList = state.populationList.map((populationItem, i) => {
          if (index === i) {
            return action.payload
          }
          return populationItem
        });
        return {
          ...state,
          populationList: updatedList
        }
      }

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

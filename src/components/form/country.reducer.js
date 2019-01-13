const countryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POPULATION":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default countryReducer;

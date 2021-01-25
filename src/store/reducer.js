export const getInitialState = () => ({
  // initial state...
    countries: []
});

const genericSort = (sortByField) => {
  return (a, b) => {
    const objA = a && a[sortByField] ? a[sortByField] : 0;
    const objB = b && b[sortByField] ? b[sortByField] : 0;
  
    if (objA < objB) {
      return 1;
    }
    if (objA > objB) {
      return -1;
    }

    return 0;
  };
};

export default (state, action) => {
  // reducers...
  switch (action.type) {
    case 'UPDATE_COUNTRIES_LIST':
      action.payload.sort(genericSort('population'));
      return { ...state, countries: action.payload };
    case 'DELETE_COUNTRY_ITEM':
      action.payload = action.payload.filter((item, index) => index !== action.index);
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

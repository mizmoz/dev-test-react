export const setCountriesList = (countries) => {
    return {
        type: 'UPDATE_COUNTRIES_LIST',
        payload: countries
    };
};

export const deleteCountryItem = (countries, index) => {
    return {
        type: 'DELETE_COUNTRY_ITEM',
        payload: countries,
        index: index
    };
};


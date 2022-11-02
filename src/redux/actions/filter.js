import { clear_render_countries } from "./actions";

export let CLEAR_RENDER_COUNTRIES = 'CLEAR_RENDER_COUNTRIES';
export let FILTER_BY_REGION = 'FILTER_BY_REGION';
export let FILTER_SPECIFIC_COUNTRY = 'FILTER_SPECIFIC_COUNTRY';


export let filter_all = (countries_arr) => {
    return dispatch => {
        dispatch(clear_render_countries())
        let all_countries = countries_arr.map(country => country);
        setTimeout(() => dispatch({ type: FILTER_BY_REGION, payload: all_countries }), 1000);
    };
};


export let filer_by_region = (countries_arr, region) => {
    return dispatch => {
        dispatch(clear_render_countries())
        let region_countries = countries_arr.filter(country => country.region === region);
        setTimeout(() => dispatch({ type: FILTER_BY_REGION, payload: region_countries }), 1000);
    };
};

export let get_specific_country = (countries_arr, input) => {
    return dispatch => {
        dispatch(clear_render_countries())
        let specific_country = countries_arr.filter(country => country.name.official.toUpperCase().includes(input.toUpperCase()));
        setTimeout(() => dispatch({ type: FILTER_BY_REGION, payload: specific_country }), 1000);
    };
};
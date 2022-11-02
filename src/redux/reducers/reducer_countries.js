import { LOADING } from "../actions/actions";
import { CLEAR_RENDER_COUNTRIES, FILTER_BY_REGION } from "../actions/filter";
import { GET_COUNTRIES } from "../actions/get";


const initial_state = {
    countries_arr: [], countries_arr_render: [], loading: false
};

const reducer_countries = (state = initial_state, action) => {
    switch (action.type) {
        case GET_COUNTRIES: return { ...state, countries_arr: action.payload, countries_arr_render: action.payload, loading: false };
        
        case FILTER_BY_REGION: return { ...state, countries_arr_render: action.payload, loading: false };
        case FILTER_BY_REGION: return { ...state, countries_arr_render: action.payload, loading: false };
        
        case CLEAR_RENDER_COUNTRIES: return { ...state, countries_arr_render: [], loading: true };
        case LOADING: return { ...state, loading: true }

        default: return { ...state };
    }
};
export default reducer_countries;
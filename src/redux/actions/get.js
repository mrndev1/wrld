import axios from "axios";
import { set_loading } from "./actions";


export let GET_COUNTRIES = 'GET_COUNTRIES';


export let get_countries = () => {
    return async dispatch => {
        try {
            dispatch(set_loading())
            let get_countries = await axios.get('/all');
            setTimeout(() => dispatch({ type: GET_COUNTRIES, payload: get_countries.data }), 1000);
        } catch (e) { console.log(e) }
    }
}; 
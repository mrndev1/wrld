import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_specific_country } from "../../../redux/actions/filter";
import s from './InputSearch.module.css';

function InputSearch () {
    
    let dispatch = useDispatch();
    let countries_arr = useSelector(state => state.reducer_countries.countries_arr);
    let [ input, set_input ] = useState('');
    
    
    let handle_submit = (event) => {
        event.preventDefault();
        dispatch(get_specific_country(countries_arr, input));
        set_input('');
    };

    return <div className={s.container}>
        <input className={s.input} value={input} onChange={(event) => set_input(event.target.value)} type="text"/>
        <button className={s.btn} onClick={handle_submit}>+</button>
    </div>
};
export default InputSearch;
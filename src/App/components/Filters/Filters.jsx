import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filer_by_region, filter_all } from "../../../redux/actions/filter";
import s from './Filter.module.css';


function Filters () {
    let dispatch = useDispatch();
    let countries_arr = useSelector(state => state.reducer_countries.countries_arr);
    let [ option, set_option ] = useState('region');

    let get_all_regions = countries_arr.map((country) => country.region);
    let regions = get_all_regions.filter((item, index) => get_all_regions.indexOf(item) === index)

    let set_click_option = (event) => {
        if (event.target.value === 'ALL') dispatch(filter_all(countries_arr))
        else {
            if (event.target.value !== 'region') dispatch(filer_by_region(countries_arr, event.target.value));
            set_option(event.target.value);
        }
    };

    return (
        <div className={s.container} >
            <select className={s.select} value={option} onChange={set_click_option}>
                <option>region</option>
                {
                    regions.length && regions.map(
                        (region, index) => <option key={index}>{region}</option>
                    )
                }
            </select>
            <button className={s.btn} value='ALL' onClick={set_click_option}>All</button>
        </div>
    )
};
export default Filters;
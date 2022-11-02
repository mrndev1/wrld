import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_countries } from '../redux/actions/get';

import './App.css';
import Header from './sections/Header/Header';
import NavBar from './sections/NavBar/NavBar';
import SectionCountries from './sections/SectionCountries/SectionCountries';

function App() {

    let dispatch = useDispatch();

    let countries_arr = useSelector(state => state.reducer_countries.countries_arr_render);
    let [ current_page, set_current_page ] = useState(1);
    let [ elements_per_page, set_elements_per_page ] = useState(8);

    let cant_pages = Math.floor(countries_arr.length / elements_per_page);
    let last_index = elements_per_page * current_page;
    let first_index = last_index - elements_per_page;
    let render = countries_arr.slice(first_index, last_index);

    let pagination = (next_page) => set_current_page(next_page);

    useEffect(() => dispatch(get_countries()),[dispatch]);

    return (
        <div className={countries_arr.length <= 1? 'app_loading' : 'app'}>
            <Header/>
            <NavBar pagination={pagination} current_page={current_page} cant_pages={cant_pages}/>
            <SectionCountries render={render}/>
        </div>
    );
}

export default App;

import React from "react";
import s from './NavBar.module.css';
import Pagination from "../../components/Paginaiton/Pagination";
import InputSearch from "../../components/InputSearch/InputSearch";
import Filters from "../../components/Filters/Filters";

function NavBar ({ pagination, current_page, cant_pages }) {
    return (
        <nav className={s.container}>
            <Filters/>
            <InputSearch/>
            <Pagination pagination={pagination} current_page={current_page} cant_pages={cant_pages}/>
        </nav>
    )
};
export default NavBar;
import React from "react";
import s from './Pagination.module.css';

function Pagination ({ pagination, current_page, cant_pages }) {
    return (
        <div className={s.container}>
            <button className={s.container_btn} disabled={current_page > 1? false : true} onClick={() => pagination(current_page-1)}>prev</button>
            <div className={s.container_item}>{current_page}-{cant_pages}</div>
            <button className={s.container_btn} disabled={current_page < cant_pages ? false : true} onClick={() => pagination(current_page+1)}>next</button>
        </div>
    )
};
export default Pagination;
import React from "react";
import s from './NotFoundCard.module.css';
import img from '../../../img/not.png';

function NotFoundCard () {

    return (
        <div className={s.container}>
            <img className={s.flag} src={img} alt={`not found img`} />
            <div className={s.container_info}>
                <div>Country Not Found</div>
            </div>
        </div>
    )
};
export default NotFoundCard;
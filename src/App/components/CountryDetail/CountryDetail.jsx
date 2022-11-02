import React from "react";
import s from './CountryDetail.module.css';

function CountryDetail ({ name, capital, region, link, flag }) {

    return (
        <div className={s.container}>
            <img className={s.flag} src={flag} alt={`${name} flag`} />
            <div className={s.container_info}>
                <div>{name}</div>
                <div>{capital}</div>
                <div>{region}</div>
                <a href={link}>see on google maps</a>
            </div>
        </div>
    )
};
export default CountryDetail;
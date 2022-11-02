import React from "react";

import s from './SectionCountries.module.css';
import CountryDetail from "../../components/CountryDetail/CountryDetail";
import { useSelector } from "react-redux";
import NotFoundCard from "../../components/NotFoundCard/NotFoundCard";

function SectionCountries ({ render }) {

    let loading = useSelector(state => state.reducer_countries.loading);

    return (
        <section className={s.container}>
           {
            loading? <div className={s.loading}></div>
            : <div className={s.countries_container}>
            {
                render.length === 0? <NotFoundCard/>
                : render.map(
                    (country, index) => <CountryDetail key={index}
                        name={country.name.official} capital={country.capital[0]}
                        region={country.region} link={country.maps.googleMaps}
                        flag={country.flags.png}
                    />
                )
            }
        </div>
           }
        </section>
    )
};
export default SectionCountries;
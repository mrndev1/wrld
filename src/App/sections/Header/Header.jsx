import React from "react";
import s from './Header.module.css';

function Header () {
    return (
        <header className={s.container}>
            <h1 className={s.txt}>WORLD</h1>
        </header>
    )
};
export default Header;
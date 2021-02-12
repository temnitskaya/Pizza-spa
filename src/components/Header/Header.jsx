import React from 'react'
import { NavLink } from 'react-router-dom';
import Basket from './Basket/Basket';
import s from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={`${s.wrapper} ${s.container}`}>
                <ul className={s.list}>
                    <li>
                        <NavLink to="/bonuses" className={s.link}>Бонусы</NavLink>
                    </li>
                    <li>
                        <NavLink to="/promo" className={s.link}>АКЦИИ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/delivery" className={s.link}>Доставка</NavLink>
                    </li>
                    <li>
                        <NavLink to="/career" className={s.link}>Карьера</NavLink>
                    </li>
                </ul>
                <ul className={s.list}>
                    <li className={s.user}>
                        <a href="/" className={s.link}>Войти</a>
                    </li>
                    <li className={s.basket}>
                        <Basket />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
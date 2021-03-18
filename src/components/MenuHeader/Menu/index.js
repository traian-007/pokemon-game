
import { Link } from 'react-router-dom';
// import { useState } from "react";
import cn from 'classnames';
import s from './style.module.css';
const MENU = [
    {
        title: 'HOME',
        to: '/'
    },
    {
        title: 'GAME',
        to: 'game'
    },
    {
        title: 'ABOUT',
        to: 'about'
    },
    {
        title: 'CONTACT',
        to: 'contact'
    }
]
const Menu = ({ isActive, onChangeMenu }) => {
    // const activDeactive = isActive ? s.active : s.deactive
    return (
        <div className={cn(s.menuContainer, { [s.active]: isActive === true, [s.deactive]: isActive === false })}>
            <div className={s.overlay} />
            <div className={s.menuItems}>
                <ul>
                    {MENU.map(({ title, to }, index) => (
                        <li key={index} >
                            <Link onClick={onChangeMenu} to={to}>
                                {title}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>

    )
};

export default Menu;
import React from 'react';

import Logo from "../Logo/Logo"
import s from './Header.module.scss'

import searchIcon from '../../assets/images/search-icon.png'
import reactDom from 'react-dom';


const header = () => (
    <header className={s.header}>
        <div className={s.logo}>
            <Logo />
        </div>
            <input type="text" name="search" placeholder=""/>
    </header>
)


export default header
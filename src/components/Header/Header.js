import React from 'react';

import Logo from "../Logo/Logo"
import s from './Header.module.scss'


const header = () => (
    <header className={s.header}>
        <div className={s.logo}>
            <Logo />
        </div>
    </header>
)


export default header
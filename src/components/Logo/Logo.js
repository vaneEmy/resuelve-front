import React from 'react'

import s from './Logo.module.scss'
import ghibilLogo from '../../assets/images/logo.png'

const logo = () => (
    <div className={s.logo}>
        <img src={ghibilLogo} alt="Logo de los estudios Ghibli"/>
    </div>
)

export default logo
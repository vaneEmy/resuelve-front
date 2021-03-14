import React, { useState } from 'react'

import s from './Carousel.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const Carousel = (props) => {
    
    const { images } = props

    const [pos, setPos] = useState(0)
    
    function changePos(newPos) {
        if (newPos < 0) {
            setPos(images.length - 1)
        } else if (newPos === images.length) {
            setPos(0)
        } else {
            setPos(newPos)
        }
    }

    return (
        <div className={s.container}>
            <div className={s.content}>
                <img src={images[pos]} alt="Studio Ghibli movie gallery"/>
                <button onClick={() => changePos(pos - 1 )}><FontAwesomeIcon icon={faArrowCircleLeft} className={s.icon}/></button>
                <button onClick={() => changePos(pos + 1 )}><FontAwesomeIcon icon={faArrowCircleRight} className={s.icon}/></button>
            </div>
        </div>
    )
}

export default Carousel
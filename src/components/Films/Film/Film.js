import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercent, faStar } from '@fortawesome/free-solid-svg-icons'

import s from './Film.module.scss'
import filmImage from '../../../assets/images/film.jpg'

class Film extends Component{

    

    render(){

        const description_arr = this.props.filmData.description.split(".")
        const hrs = Math.floor(parseInt(this.props.filmData.running_time)/60);
        const min = parseInt(this.props.filmData.running_time)%60;
        
        return(
            <>
            <div key={this.props.filmData.id} className={s.container}>
                <img src={filmImage} alt="Image of a movie"/>
                <div className={s.title}>
                    <h3>{this.props.filmData.title}</h3>
                    <p><FontAwesomeIcon icon={faStar} className={s.rating}/>{this.props.filmData.rt_score}%</p>
                </div>
                <div className={s.duration}>
                    { 
                        hrs > 0 &&  <p>{hrs} hrs {min} min</p>
                    }
                </div>
                <div className={s.content}>
                    <p>{description_arr[0]}</p>
                </div>
            </div>
            </>
        )
    }
}

export default Film
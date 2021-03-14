import React from 'react'

import Film from './Film/Film' 

const Films = (props) => (
    props.films.map((film) =>{
        return (
            <Film filmData={film} />
        )
    })
)

export default Films
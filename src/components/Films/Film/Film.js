import React, { Component } from 'react'


class Film extends Component{
    render(){
        return(
            <>
            <div key={this.props.filmData.id}>
                <div>
                    <h3>{this.props.filmData.title}</h3>
                </div>
            </div>
            </>
        )
    }
}

export default Film
import React, { Component } from 'react'

class HideableText extends Component{

    state ={
        isHidden: false,
    }

    toggleIsHidden = () =>{
        this.setState((currentState) => ({ isHidden: !currentState.isHidden }))
    }

    render () {
        return (
            <div>
                <button onClick={() => this.toggleIsHidden()}>Toggle</button>
                <div>{!this.state.isHidden && this.props.text}</div>
            </div>   
        )
    }
}

export default HideableText
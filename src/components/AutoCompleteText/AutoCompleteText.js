import React, { Component } from 'react'

import s from './AutoCompleteText.module.scss'

class AutoCompleteText extends Component{

    render(){
        return (
            <>
                <input type="text" value={this.props.text} name="search" placeholder="" onChange={(e) => this.props.onChangeText(e) }/>
                {
                    this.props.items.length > 0 &&
                    <ul>
                        { this.props.items.map(item => <li onClick={() => this.props.onSelectSuggestion(item)}>{item.title}</li>) }
                    </ul>
                }
               
            </>
        )
    }
}

export default AutoCompleteText
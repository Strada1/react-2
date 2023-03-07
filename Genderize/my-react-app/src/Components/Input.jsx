import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <input
            onChange={this.props.onInputHandlerChange}
            value={this.props.value}
            type="text"
            placeholder='Type your name'/>
        )
    }
}

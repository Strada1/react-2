import React from 'react'

export default function CheckInputFalse(props) {
    let value = props.name;
        return (
            <div style={{visibility: value ? 'hidden' : 'visible', color: 'red'}}>Your name has to be longer than three symbols</div>
        )
}

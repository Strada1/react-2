import React from 'react'

export default function CheckInputFalse(props) {
    let value = props.name;
    if(value.length <= 3) {
        return (
            <div style={{visibility: props.gender ? 'visible' : 'hidden', color: 'red'}}>Your name has to be longer than two symbols</div>
        )
    }
}

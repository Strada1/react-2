import React from 'react'

export default function CheckInputFalse(props) {
    let value = props.name;
    if(!value) {
        return (
            <div style={{color: 'red'}}>Your name has to be longer than three symbols</div>
        )
    } else {
        return null
    }
        
}

import React from 'react'

export default function CheckLength(props) {
    const value = props.name;
    if(value) {
        return null
    } else {
        return (
            <div style={{color: 'red'}}>Your name has to be longer than three symbols</div>
        )
    }
        
}
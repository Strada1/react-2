import React from 'react'

export default function Input(props) {
    return (
        <input
        placeholder='Type your name'
        type='text'
        onChange={props.inputHandler}
        value = {props.value}/>
    )
}

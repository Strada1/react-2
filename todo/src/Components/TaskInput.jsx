import React from 'react'

export function TaskInput({InputValue, setValue, getTask}) {
    return (
        <div>
            <form onSubmit= {getTask}>
            <input
            value={InputValue}
            type='text'
            onChange={(e)=> {setValue(e.target.value)}}
            placeholder='Type important todo task'/>
            </form>
        </div>
    )
}




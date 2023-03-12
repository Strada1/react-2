import React from 'react'

export function TaskHighInput({highInputValue, setHighValue, getTask}) {
    return (
        <div>
            <form onSubmit= {getTask}>
            <input
            value={highInputValue}
            type='text'
            onChange={(e)=> {setHighValue(e.target.value)}}
            placeholder='Type important todo task'/>
            </form>
        </div>
    )
}

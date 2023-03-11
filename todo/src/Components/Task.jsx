import React from 'react'

export default function Task({task, id, deleteTask}) {
    return (
        <div className='inputTask'>
            <input
            className='inputCheck'
            type='checkbox'
            id={id}
            />
            <label htmlFor={id}>{task}</label>
            <button className='delete' onClick={deleteTask}>Delete</button>
        </div>
    )
}



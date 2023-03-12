import React from 'react'

export default function Task({task, id, deleteTask, changeStatus, statusStyle}) {
    return (
        <div className='inputTask' style={statusStyle}>
            <input
            className='inputCheck'
            type='checkbox'
            id={id}
            onChange={changeStatus}
            />
            <label htmlFor={id}>{task}</label>
            <button className='delete' onClick={deleteTask}>Delete</button>
        </div>
    )
}



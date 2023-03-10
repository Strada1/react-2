import React from 'react'
import './task.css'

export default function Task(props) {
    return (
        <div className='task'>
            <div className="task_input task_input_label">
                <input
                type="checkbox" 
                className='checkbox' 
                id={props.id}
                onChange={props.changeStatus}/>
                    <label
                    htmlFor={props.id} 
                    className='label'>{props.task}</label>
            </div>
        </div>
    )
}




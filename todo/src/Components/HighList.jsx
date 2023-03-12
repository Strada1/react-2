import React from 'react'
import Task from './Task'

export default function HighList({todos, deleteTodo}) {
    return (
        <div>
            {todos.length > 0 ? 
            (<ul>
                {todos.map((item) => (
                    <li key={item.name}>
                        <Task
                        id={item.id}
                        task={item.name}
                        deleteTask={()=> deleteTodo(item.id)}/>
                    </li>
                ))}
            </ul>) : (
            <div className="empty">
                <p>No task found</p>
            </div>)}
        </div>
    )
}






import React from 'react'
import Task from './Task'

export function HighList({todos, deleteTodo, statusChange}) {
    return (
        <div>
            {todos.length > 0 ? 
            (<ul>
                {todos.map((item) => (
                    item.priority === 'high' ?
                    <li key={item.name}>
                        <Task
                        statusStyle={{textDecoration: item.checked ? 'line-through' : 'none'}}
                        id={item.id}
                        task={item.name}
                        deleteTask={()=> deleteTodo(item.id)}
                        changeStatus={()=> statusChange(item.id)}
                        checked={item.checked}
                        />
                    </li> : <></>
                ))}
            </ul>) : (
            <div className="empty">
                <p>No task found</p>
            </div>)}
        </div>
    )
}

export function LowList({todos, deleteTodo, statusChange}) {
    return (
        <div>
            {todos.length > 0? 
            (<ul>
                {todos.map((item) => (
                    item.priority === 'low' ?
                    <li key={item.name}>
                        <Task
                        statusStyle={{textDecoration: item.checked ? 'line-through' : 'none'}}
                        id={item.id}
                        task={item.name}
                        deleteTask={()=> deleteTodo(item.id)}
                        changeStatus={()=> statusChange(item.id)}
                        checked={item.checked}
                        />
                    </li> : <></>
                ))}
            </ul>) : (
            <div className="empty">
                <p>No task found</p>
            </div>)}
        </div>
    )
}









import React from 'react'
import Task from '../TaskComponent/Task'
import './list.css'
import Button from '../TaskComponent/Button'

export default function List({todos, deleteTodo, changeStatus}) {
    return (
        <ul>
            {todos?.map((item) => (
                <li key={item.id}>
                    <Task 
                    task={item.name}
                    id={item.id}
                    />
                    <Button deleteTask = {()=> deleteTodo(item.id)}/>
                </li>
            ))}
        </ul>
    )
}





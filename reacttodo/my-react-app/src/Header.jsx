import { useState } from 'react'

function Header({ addTodo }) {
    const [todo, setTodo] = useState(null)
    const [priority, setPriority] = useState("High")

    const inputChange = (event) => {
        setTodo(event.target.value)
    }
    const onChangePriority = (event) => {
        setPriority(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.length < 1) return;
        addTodo({ id: String(Date.now()), title: todo, priority: priority, status: false })
    }

    return (
        <>
            <h2 className="todo__high-title">Введите вашу задачу</h2>
            <form className="create-task-form" onSubmit={handleSubmit}>
                <input className="create-task-input" onChange={inputChange} />
                <select className="create-task-priority" onChange={onChangePriority}>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
                <button className="create-task-button">+</button>
            </form>
        </>
    )
}

export default Header
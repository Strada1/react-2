function Task({ data, onDelete, onChecked }) {
    const { title, priority, id, status } = data
    return (
        <li className={status ? "done-task" : "task"}>
            <input
                type={"checkbox"}
                onChange={() => onChecked(id)}
                checked={status} />
            <label>{title}</label>
            <span>{priority}</span>
            <button
                className="task-delete-btn"
                onClick={() => onDelete(id)}>+
            </button>
        </li>
    )
}

export default Task
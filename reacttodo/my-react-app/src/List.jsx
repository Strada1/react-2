import Task from "./Task"

function List({ todoList, onDelete , onChange}) {
    const HighPriorityTasks = todoList.filter((item) => item.priority === "High")
    const LowPriorityTasks = todoList.filter((item) => item.priority === "Low")
    return (
        <ul className="todo__task-list">
            {HighPriorityTasks.map((item) =>
             <Task
                key={item.id}
                data={item}
                onDelete={onDelete}
                onChecked={onChange} />)}
            {LowPriorityTasks.map((item) =>
             <Task
                key={item.id}
                data={item}
                onDelete={onDelete}
                onChecked={onChange} />)}
        </ul >
    )
}

export default List
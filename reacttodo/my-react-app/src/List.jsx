import { useMemo } from "react"
import Task from "./Task"

function List({ todoList, onDelete, onChange }) {
    const HighPriorityTasks =
        useMemo(() => todoList.filter((item) => item.priority === "High"), [todoList])

    const LowPriorityTasks =
        useMemo(() => todoList.filter((item) => item.priority === "Low"), [todoList])

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
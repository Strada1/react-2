import React, { useState } from "react";

const Task = (props) => {
    const body = props.body;

    const [checked, setChecked] = useState(Boolean(body.status))

    function deleteTask(prevList) {
        const newList = prevList.filter((task) => task.id !== body.id);

        return newList
    }

    function removeHandler() {
        props.control(deleteTask)
    }

    function changeStatus(prevList) {
        const newList = prevList.map((task) => {
            if (task.id === body.id) {
                const newStatus = task.status === 'Done' ? '' : 'Done';
                
                task.status = newStatus;
            }

            return task
        })
        setChecked(!checked);

        return newList
    }

    function clickHandler() {
        props.control(changeStatus);
    }

    return (
        <div className={body.priority + "__task task " + body.status} onClick={clickHandler}>
            <input checked={checked} className="check" type="checkbox" />
            <div className="task__text">{body.name}</div>
            <div onClick={removeHandler} className="task__remove" >{"+"}</div>
        </div>
    )
}

export default Task
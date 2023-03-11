import React, { useState } from "react";
import storage from "../storage";
import { STATUSES } from "../consts";

const Task = ({ setList, body }) => {
    const { id, status, priority, name } = body;

    const [checked, setChecked] = useState(Boolean(status));

    function deleteTask(oldList) {
        const newList = oldList.filter((task) => task.id !== id);
        storage.save(newList);

        return newList
    }

    function removeHandler() {
        setList(deleteTask);
    }

    function getNewStatus(){
        return checked ? STATUSES.DEFAULT : STATUSES.DONE
    }

    function changeStatus(oldList) {
        const newList = oldList.map((task) => {
            if (task.id === id) {
                const newStatus = getNewStatus();
                task.status = newStatus;
            }
            return task
        });
        storage.save(newList);

        return newList
    }

    function clickHandler() {
        setList(changeStatus);
        setChecked(!checked);
    }

    function checkboxHandler(event) {
        setValue(event.target.checked);
    }

    return (
        <div className={priority + "__task task " + status} onClick={clickHandler}>
            <input
                onChange={checkboxHandler}
                checked={checked}
                className="check"
                type="checkbox"
            />
            <div className="task__text">{name}</div>
            <div onClick={removeHandler} className="task__remove" >{"+"}</div>
        </div>
    )
}

export default Task
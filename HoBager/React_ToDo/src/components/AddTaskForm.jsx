import React, { useState } from "react";
import { DEFAULT_INPUT_VALUE,STATUSES } from "../consts";
import storage from "../storage";


const AddTaskForm = ({ setList, priority }) => {
    const [value, setValue] = useState(DEFAULT_INPUT_VALUE);

    function changeHandler(event) {
        setValue(event.target.value);
    }

    function createTask(name) {
        return { id: Date.now(), name, priority, status: STATUSES.DEFAULT }
    }

    function submitHandler(event) {
        event.preventDefault();

        if (value) {
            setList((oldList) => {
                const newList = [...oldList, createTask(value)];
                storage.save(newList);

                return newList
            });
        }
        setValue(DEFAULT_INPUT_VALUE);
    }

    return (
        <form onSubmit={submitHandler} className={priority + "__add add"}>
            <input
                onChange={changeHandler}
                value={value} type="text"
                className={priority + "__input input-add"} />
            <input type="submit" className="newTask" value="+" />
        </form>

    )
}

export default AddTaskForm
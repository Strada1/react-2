import React, { useState } from "react";

const AddTaskForm = (props) => {
    const [value, setValue] = useState('');

    function changeHandler(e) {
        setValue(e.target.value);
    }

    function createTask(value) {
        return { id: Date.now(), name: value, priority: props.priority, status: '' }
    }

    function submitHandler(e) {
        e.preventDefault();

        if (value) {
            props.listControl((prev) => {
                const newList = [...prev, createTask(value)];

                return newList
            });
        }
        setValue('');
    }

    return (
        <form onSubmit={submitHandler} className={props.priority + "__add add"}>
            <input
                onChange={changeHandler}
                value={value} type="text"
                className={props.priority + "__input input-add"} />
            <input type="submit" className="newTask" value="+" />
        </form>

    )
}

export default AddTaskForm
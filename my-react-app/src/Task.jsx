import { useState, useEffect } from 'react';

function Task({ title, status, priority }) {
    /*function addTas(addTask) {
        e.preventDefault();

        const task = {
            id: self.crypto.randomUUID(),
            title: title,
            status: status,
            priority: priority,
        };

        console.log(task);
        setlistTodo([...listTodo, task]);
    }*/

    /*const task = {
        id: self.crypto.randomUUID(),
        title: title,
        status: status,
        priority: priority,
    };*/

    function handleChange() {
        props.onValueChange();
    }

    return (
        <div className="task">
            <input
                //   onChange={handleChange}
                className="checkbox"
                type="checkbox"
            ></input>
            {title}
            <button className="removalButton">X</button>
        </div>
    );
}

/*export function creatTask(inputText, priority, status) {
    //console.log(inputText);
    const task = {
        id: self.crypto.randomUUID(),
        title: title,
        status: status,
        priority: priority,
    };

    //setTaskInList((list) => [...list, task]);
    //  localStorage.setItem(`tasks`, JSON.stringify(task));
}*/

export default Task;

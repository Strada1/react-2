import { useState, useEffect } from 'react';

function Task({ addTask, inputText, title, status, priority }) {
    console.log(addTask);

    const [listTodo, setlistTodo] = useState([]);

    function addTas(addTask) {
        e.preventDefault();
        console.log(e);

        const task = {
            id: self.crypto.randomUUID(),
            title: textInput,
            status: status,
            priority: priority,
        };

        setlistTodo([...listTodo, task]);
    }

    console.log(listTodo);

    const task = {
        id: self.crypto.randomUUID(),
        title: inputText,
        status: status,
        priority: priority,
    };

    function handleChange() {
        props.onValueChange(task);
    }

    return (
        <div className="task">
            <input
                //   onChange={handleChange}
                className="checkbox"
                type="checkbox"
            ></input>
            {inputText}
            <button className="removalButton">X</button>
        </div>
    );
}

/*export function creatTask(inputText, priority, status) {
    //console.log(inputText);
    const task = {
        id: self.crypto.randomUUID(),
        title: inputText,
        status: status,
        priority: priority,
    };

    //setTaskInList((list) => [...list, task]);
    //  localStorage.setItem(`tasks`, JSON.stringify(task));
}*/

export default Task;

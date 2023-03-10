import { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';
import addTask from './Task';

function BlockTodo(props) {
    const priority = props.priority;
    const status = 'todo';
    const [textInput, setTextIn] = useState('');
    //const [listTodo, setlistTodo] = useState([]);
    const [task, setTask] = useState('');
    const [listTodo, setlistTodo] = useState([]);
    //setlistTodo([...listTodo, task]);

    function addTask(e) {
        e.preventDefault();

        if (textInput === '') {
            return;
        }

        const task = {
            id: self.crypto.randomUUID(),
            title: textInput,
            status: status,
            priority: priority,
        };

        setlistTodo([...listTodo, task]);
        setTask(task);
        setTextIn('');
    }

    function handleChange(e) {
        props.onValueChange(listTodo);
    }

    console.log(props.localStorageDataObj);

    return (
        <div className={priority}>
            <h2 id="name">{props.title}</h2>

            <form onSubmit={addTask} className="toDoForm">
                <Header
                    onValueChange={(e) => {
                        handleChange(e);
                        setTextIn(e);
                    }}
                    priority={priority}
                    value={textInput}
                />

                <button onClick={addTask} className="btnAdd" type="submit">
                    &#10006;
                </button>
            </form>

            {props.localStorageDataObj > 0 && (
                <List
                    addTask={addTask}
                    inputText={textInput}
                    status={status}
                    priority={priority}
                    list={props.localStorageDataObj}
                />
            )}
        </div>
    );
}

export default BlockTodo;

import { useState, useEffect } from 'react';
import BlockTodo from './BlockTodo';
import './App.css';

const todoBlocks = [
    { priority: 'high', title: 'HIGH' },
    { priority: 'low', title: 'LOW' },
];

const tasks = 'tasks';
const defaultValue = '';

function App() {
    const dataLs = localStorage.getItem(tasks);
    const listLs = JSON.parse(dataLs);

    const [listTodo, setListTodo] = useState(listLs || []);
    //const [checkedPriority, setCheckedPriority] = useState(false);

    function searchTaskById(id) {
        const taskID = listTodo.find((item) => item.id === id);
        //const taskNumber = listTodo.indexOf(taskID, 0);
        return taskID;
    }

    function changePriority(id, status) {
        const newList = listLs.map((item) =>
            item.id === id ? { ...item, status: status ? false : true } : item
        );
        console.log(newList);
        setListTodo(newList);
    }
    console.log(listTodo);

    function deleteTask(id) {
        const idTask = id;
        const newList = listLs.filter((item) => item.id !== idTask);
        setListTodo(newList);
    }

    function addTask(e, textInput, status, priority) {
        e.preventDefault();
        const checkRepeat = listTodo.find((item) => item.title === textInput);

        if (checkRepeat || textInput === defaultValue) {
            return;
        }

        const task = {
            id: self.crypto.randomUUID(),
            title: textInput,
            status: status,
            priority: priority,
        };

        setListTodo([...listTodo, task]);
    }

    setLocalStorage(listTodo);

    // setLocalStorage(listTodo);
    //localStorage.setItem(tasks, JSON.stringify(listTodo));

    return (
        <div className="containerTodo">
            <div className="containerSheet">
                {todoBlocks.map(({ priority, title }) => (
                    <BlockTodo
                        key={priority}
                        title={title}
                        priority={priority}
                        addTask={addTask}
                        list={listLs}
                        changePriority={changePriority}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
}

function setLocalStorage(listTodo) {
    localStorage.setItem(tasks, JSON.stringify(listTodo));
}

export default App;

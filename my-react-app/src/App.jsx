import { useState, useEffect } from 'react';
import BlockTodo from './BlockTodo';
import './App.css';

const todoBlocks = [
    { priority: 'high', title: 'HIGH' },
    { priority: 'low', title: 'LOW' },
];

export const defaultValue = '';
const tasks = 'tasks';
const isDone = false;

function App() {
    const dataLs = localStorage.getItem(tasks);
    const listLs = JSON.parse(dataLs);

    const [listTodo, setListTodo] = useState(listLs || []);

    function changePriority(id, isDone) {
        const newList = listLs.map((item) =>
            item.id === id ? { ...item, isDone: isDone ? false : true } : item
        );
        setListTodo(newList);
    }

    function deleteTask(id) {
        const idTask = id;
        const newList = listLs.filter((item) => item.id !== idTask);
        setListTodo(newList);
    }

    function addTask(e, textInput, isDone, priority) {
        e.preventDefault();
        const checkRepeat = listTodo.find((item) => item.title === textInput);

        if (checkRepeat || textInput === defaultValue) {
            return;
        }

        const task = {
            id: self.crypto.randomUUID(),
            title: textInput,
            isDone: isDone,
            priority: priority,
        };

        setListTodo([...listTodo, task]);
    }
    localStorage.setItem(tasks, JSON.stringify(listTodo));

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
                        isDone={isDone}
                        changePriority={changePriority}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

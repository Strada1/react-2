import { useState, useEffect } from 'react';
import BlockTodo from './BlockTodo';
//import { creatTask } from './Task';
import './App.css';

const todoBlocks = [
    { priority: 'high', title: 'HIGH' },
    { priority: 'low', title: 'LOW' },
];

const defaultValue = '';

function App() {
    const [task, setTask] = useState([]);
    const [listTodo, setlistTodo] = useState([]);
    const localStorageData = localStorage.getItem('tasks');
    const localStorageDataObj = JSON.parse(localStorageData) ?? [];

    console.log(task);

    /* 
        setlistTodo([...listTodo, task]);
    */

    console.log(listTodo);

    return (
        <div className="containerTodo">
            <div className="containerSheet">
                {todoBlocks.map(({ priority, title }) => (
                    <BlockTodo
                        key={priority}
                        title={title}
                        priority={priority}
                        // inputText={inputText}
                        localStorageDataObj={localStorageDataObj}
                        onValueChange={(text) => {
                            setTask([...task, text]);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

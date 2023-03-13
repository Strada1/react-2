import { useState, useEffect } from 'react';
import BlockTodo from './components/BlockTodo';
import { defaultValue, todoBlocks, tasks, isDone } from './constants';
import './App.css';

function App() {
    const [listTodo, setListTodo] = useState(
        JSON.parse(localStorage.getItem(tasks)) || []
    );

    const [click, setClick] = useState(false);

    function changePriority(id, isDone) {
        const newList = listTodo.map((item) =>
            item.id === id ? { ...item, isDone: !isDone } : item
        );
        setListTodo(newList);
    }

    function deleteTask(id) {
        const idTask = id;
        const newList = listTodo.filter((item) => item.id !== idTask);
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

        setListTodo((listTodo) => [...listTodo, task]);
        setClick(click === false ? true : false);
    }

    useEffect(() => {
        localStorage.setItem(tasks, JSON.stringify(listTodo));
    }, [listTodo]);

    return (
        <div className="containerTodo">
            <div className="containerSheet">
                {todoBlocks.map(({ priority, title }) => (
                    <BlockTodo
                        key={priority}
                        title={title}
                        priority={priority}
                        addTask={addTask}
                        list={listTodo}
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

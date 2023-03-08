import { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';

const defaultValue = '';
//localStorage.clear();

function BlockTodo(props) {
    const localStorageData = localStorage.getItem(`${props.priority}Tasks`);

    if (!localStorageData) {
        localStorage.setItem(`${props.priority}Tasks`, []);
    }
    const localStorageDataObj = JSON.parse(localStorageData);

    const [list, setTaskInList] = useState([]);
    const [inputText, setInputText] = useState(defaultValue);
    const [buttonOn, setButtonOn] = useState(false);

    if (localStorageDataObj) {
        console.log(localStorageDataObj);
    }

    function addTask(e) {
        e.preventDefault();

        const taskInTheList = list.find((item) => item.title === inputText);
        if (taskInTheList) {
            console.log(taskInTheList);
            return;
        }

        const task = creatTask(e, inputText);
        setTaskInList((list) => [...list, task]);
    }

    localStorage.setItem(`${props.priority}Tasks`, JSON.stringify(list));

    useEffect(() => {
        setButtonOn(true);
    });

    return (
        <div className={props.priority}>
            <h2 id="name">{props.title}</h2>
            <form onSubmit={addTask} className="toDoForm">
                <Header
                    onValueChange={(e) => setInputText(e)}
                    value={inputText}
                />
                <button className="btnAdd" type="submit">
                    &#10006;
                </button>
            </form>

            {buttonOn && (
                <List
                    priority={props.priority}
                    dataTasks={[localStorageDataObj]}
                />
            )}
        </div>
    );
}

function creatTask(e, inputText) {
    const priority = e.target.closest('.low');
    const checkPriority = priority ? 'low' : 'high';

    const task = {
        title: inputText,
        status: 'todo',
        priority: checkPriority,
    };
    return task;
}

export default BlockTodo;

import { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';
import addTask from './Task';

function BlockTodo(props) {
    const priority = props.priority;
    const status = 'todo';
    const [textInput, setTextIn] = useState('');
    const [addTask, setAddTask] = useState('');
    //const [listTodo, setlistTodo] = useState([]);
    const [formSent, setFormSent] = useState(false);

    function handleChange(e) {
        props.onValueChange(e);
    }

    /*function addTask(e) {
        e.preventDefault();

        const task = {
            id: self.crypto.randomUUID(),
            title: textInput,
            status: status,
            priority: priority,
        };

        setlistTodo([...listTodo, task]);
    }*/

    //console.log(listTodo);

    return (
        <div className={priority}>
            <h2 id="name">{props.title}</h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                    setAddTask(e);
                    //addTask(e);
                }}
                className="toDoForm"
            >
                <Header
                    onValueChange={(e) => {
                        // handleChange(e);
                        setTextIn(e);
                    }}
                    priority={priority}
                    value={textInput}
                />

                <button
                    // onClick={(e) => setFormSent(true)}
                    className="btnAdd"
                    type="submit"
                >
                    &#10006;
                </button>
                {formSent && (
                    <List
                        addTask={addTask}
                        inputText={textInput}
                        status={status}
                        priority={priority}
                        list={props.localStorageDataObj}
                    />
                )}
            </form>
        </div>
    );
}

export default BlockTodo;

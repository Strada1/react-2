import { useState, useEffect } from 'react';
import Header from './Header';
import List from './List';

const status = false;

function BlockTodo(props) {
    const priority = props.priority;
    const list = props.list;
    const changePriority = props.changePriority;
    const deleteTask = props.deleteTask;

    const [textInput, setTextIn] = useState('');

    const listPart = list.filter((item) => item.priority === priority);

    return (
        <div className={priority}>
            <h2 id="name">{props.title}</h2>

            <form
                onSubmit={(e) => {
                    props.addTask(e, textInput, status, priority);
                    setTextIn('');
                }}
                className="toDoForm"
            >
                <Header
                    onValueChange={(e) => {
                        setTextIn(e);
                    }}
                    value={textInput}
                />

                <button className="btnAdd" type="submit">
                    &#10006;
                </button>
            </form>

            {(priority === 'high' || priority === 'low') && (
                <List
                    list={listPart}
                    priority={priority}
                    changePriority={changePriority}
                    deleteTask={deleteTask}
                />
            )}
        </div>
    );
}

export default BlockTodo;

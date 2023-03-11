import { useState } from 'react';
import Header from './Header';
import List from './List';
import { defaultValue } from './App';

function BlockTodo(props) {
    const { priority, isDone, title, list, changePriority, deleteTask } = props;
    const [textInput, setTextIn] = useState(defaultValue);

    const listPart = list.filter((item) => item.priority === priority);

    return (
        <div className={priority}>
            <h2 id="name">{title}</h2>

            <form
                onSubmit={(e) => {
                    props.addTask(e, textInput, isDone, priority);
                    setTextIn(defaultValue);
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

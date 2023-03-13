import { useState } from 'react';
import Header from './Header';
import List from './List';
import { defaultValue, PRIORITY } from '../constants';

function BlockTodo(props) {
    const {
        priority,
        isDone,
        title,
        list,
        changePriority,
        deleteTask,
        addTask,
    } = props;

    const [textInput, setTextInput] = useState(defaultValue);

    const listPart = list.filter((item) => item.priority === priority);
    const checkPriority =
        priority === PRIORITY.HIGH || priority === PRIORITY.LOW;

    return (
        <div className={priority}>
            <h2 id="name">{title}</h2>

            <form
                onSubmit={(e) => {
                    addTask(e, textInput, isDone, priority);
                    setTextInput(defaultValue);
                }}
                className="toDoForm"
            >
                <Header
                    onValueChange={(e) => {
                        setTextInput(e);
                    }}
                    value={textInput}
                />

                <button className="btnAdd" type="submit">
                    &#10006;
                </button>
            </form>

            {checkPriority && (
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

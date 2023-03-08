import { useState, useEffect } from 'react';

function Task({ title, status, priority }) {
    function handleChange(e) {
        console.log(e);
        props.onValueChange(e);
    }

    function taskDelete(e) {
        const taskText = e.target.closest('.task');

        console.log(taskText.textContent);
    }

    return (
        <div className="task">
            <input
                onChange={handleChange}
                className="checkbox"
                type="checkbox"
            ></input>
            {title}
            <button onClick={taskDelete} className="removalButton">
                X
            </button>
        </div>
    );
}

export default Task;

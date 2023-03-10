import { useState, useEffect } from 'react';

function Task({ id, title, status, priority, changePriority, deleteTask }) {
    return (
        <div className="task">
            <input
                onChange={() => changePriority(id)}
                className="checkbox"
                type="checkbox"
            ></input>
            {title}
            <button onClick={() => deleteTask(id)} className="removalButton">
                X
            </button>
        </div>
    );
}

export default Task;

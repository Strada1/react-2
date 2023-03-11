import React from "react";
import Task from "./Task";

const TaskList = ({ setList, list, priority }) => {

    const tasks = list.map((task) => (
        <Task key={task.id} setList={setList} body={task} />
    ));

    return (
        <div className={priority + "__tasks tasks"}>
            {tasks.length === 0
                ? <h2 className="empty">{`Нет задач`}</h2>
                : tasks
            }
        </div>
    )
}

export default TaskList
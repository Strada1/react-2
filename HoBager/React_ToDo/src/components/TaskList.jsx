import React from "react";
import Task from "./Task";

const TaskList = (props) => {

    const list = props.list.map((task) => (
        <Task key={task.id} control={props.listControl} body={task} />
    ));

    return (
        <div className={props.priority + "__tasks tasks"}>
            {list}
        </div>
    )
}

export default TaskList
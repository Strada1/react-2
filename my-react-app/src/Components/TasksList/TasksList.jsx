import React from "react";
import "./TasksList.css";
import TaskItem from "../TaskItem/TaskItem";

export default function TasksList({ tasks, priority, setTasks }) {
  const changeStatus = (name) => {
    const changedTasks = tasks.map((task) =>
      task.name === name ? { ...task, isDone: !task.isDone } : task
    );

    setTasks(changedTasks);
  };

  const deleteTask = (name) => {
    setTasks(tasks.filter((task) => task.name !== name));
  };

  const tasksByPriority = tasks.filter((task) => task.priority === priority);

  return (
    <ul className="tasks-list">
      {tasksByPriority.map((task) => (
        <TaskItem
          value={task.name}
          key={Math.random()}
          isDone={task.isDone}
          deleteTask={deleteTask}
          changeStatus={changeStatus}
        />
      ))}
    </ul>
  );
}

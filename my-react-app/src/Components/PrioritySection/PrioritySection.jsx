import React from "react";
import "./PrioritySection.css";
import Form from "../Form/Form";
import TasksList from "../TasksList/TasksList";

export default function PrioritySection({
  title,
  priority,
  tasks,
  addTask,
  setTasks,
}) {
  return (
    <fieldset className="tasks-wrapper">
      <legend>{title}</legend>
      <Form addTask={addTask} priority={priority} />
      <TasksList priority={priority} tasks={tasks} setTasks={setTasks} />
    </fieldset>
  );
}

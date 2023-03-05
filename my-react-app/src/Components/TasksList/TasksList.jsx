import React from "react";
import "./TasksList.css";
import TaskItem from "../TaskItem/TaskItem";

export default function TasksList() {
  return (
    <ul className="tasks-list">
      <TaskItem value="Watch YouTube" />
      <TaskItem value="Do housework" />
      <TaskItem value="Clean teeth" />
      <TaskItem value="Smth else" />
    </ul>
  );
}

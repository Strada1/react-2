import React from "react";
import "./TaskItem.css";
import ButtonClose from "../ButtonClose/ButtonClose";

export default function TaskItem({ value, deleteTask, changeStatus, isDone }) {
  return (
    <li className={`task-item + ${isDone ? "status-done" : ""}`}>
      <label>
        <input
          type="checkbox"
          name="to_do"
          checked={isDone}
          onChange={() => {
            changeStatus(value);
          }}
        />
        <p className="task-name">{value}</p>
      </label>
      <ButtonClose value={value} deleteTask={deleteTask} />
    </li>
  );
}

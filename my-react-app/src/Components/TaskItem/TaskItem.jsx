import React from "react";
import "./TaskItem.css";
import ButtonClose from "../ButtonClose/ButtonClose";

export default function TaskItem({ value }) {
  return (
    <li className="task-item">
      <label>
        <input type="checkbox" name="to_do" />
        <p className="task-name">{value}</p>
      </label>
      <ButtonClose />
    </li>
  );
}

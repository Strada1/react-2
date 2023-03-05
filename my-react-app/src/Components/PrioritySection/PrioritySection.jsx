import React from "react";
import "./PrioritySection.css";
import Form from "../Form/Form";
import TasksList from "../TasksList/TasksList";

export default function PrioritySection({ title }) {
  return (
    <fieldset className="tasks-wrapper">
      <legend>{title}</legend>
      <Form />
      <TasksList />
    </fieldset>
  );
}

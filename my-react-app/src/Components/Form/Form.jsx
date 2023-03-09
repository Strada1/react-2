import React, { useState } from "react";
import "./Form.css";
import Input from "../Input/Input";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

const defaultValue = "";

export default function Form({ priority, addTask }) {
  const [name, setName] = useState(defaultValue);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return alert("Вы не ввели задачу!");

    const task = { name, priority, isDone: false };
    addTask(task);

    setName(defaultValue);
  };

  return (
    <form onSubmit={handleSubmit} className="to-do-form">
      <Input value={name} onChange={handleChange} />
      <ButtonAdd />
    </form>
  );
}

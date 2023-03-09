import React from "react";
import "./Input.css";

export default function Input({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      className="to-do-input"
      placeholder="Введите вашу задачу"
    />
  );
}

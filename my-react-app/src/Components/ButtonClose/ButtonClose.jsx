import React from "react";
import "./ButtonClose.css";

export default function ButtonClose({ value, deleteTask }) {
  return (
    <button
      className="btn-exit"
      type="button"
      onClick={() => {
        deleteTask(value);
      }}
    ></button>
  );
}

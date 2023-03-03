import React from "react";
import styles from "./todoitem.module.scss";
import CloseIcon from "../../assets/add-icon.png";
const TodoItem = ({ todo, handleCompleted, handleDeleteClick }) => {
  return (
    <div
      className={`${styles.div_todoitem} ${
        todo.completed ? styles.checked : null
      }`}
    >
      <label className={styles.checkbox}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => handleCompleted(todo.id)}
        />
        <span className={styles.checkmark}></span>
      </label>

      <span>{todo.title}</span>
      <button
        onClick={() => {
          handleDeleteClick(todo.id);
        }}
      >
        <img src={CloseIcon} width={"15"} height={"15"} />
      </button>
    </div>
  );
};

export default TodoItem;

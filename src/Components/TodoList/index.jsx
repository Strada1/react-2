import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../Input";
import Title from "../Title";
import TodoItem from "../TodoItem";

const TodoList = ({
  priority,
  todos,
  setTodos,
  categories,
  selectedCategorie,
  setSelectedCategorie,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return alert("Enter name");
    const newTodo = {
      id: uuidv4(),
      completed: false,
      title: inputValue,
      priority,
      categorie: selectedCategorie,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };
  const handleTodoCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(newTodos);
  };
  const handleDeleteClick = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Title title={priority === "low" ? "Low" : "High"} />
        <Input
          onChange={handleInputChange}
          value={inputValue}
          placeholder={
            priority === "low" ? "Добавить дел" : "Добавить важных дел"
          }
          categories={categories}
          setSelectedCategorie={setSelectedCategorie}
          selectedCategorie={selectedCategorie}
        />
      </form>
      {todos.length > 0 &&
        todos.map((todo, i) => (
          <TodoItem
            todo={todo}
            key={`${todo.title} ${i}`}
            handleCompleted={handleTodoCompleted}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      {todos.length === 0 && (
        <div>No {priority === "low" ? "" : "important"} todos right now!</div>
      )}
      {!todos && <span>no todos</span>}
    </div>
  );
};

export default TodoList;

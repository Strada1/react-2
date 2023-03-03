import { useCallback, useEffect, useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import {
  getTodosFromLocalStorage,
  localStorageRemove,
  saveTodosToLocalStorage,
} from "./helpers/localStorage";

function App() {
  const [highPriorityTodos, setHighPriorityTodos] = useState([]);
  const [lowPriorityTodos, setLowPriorityTodos] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState("Работа");
  const [selectedFilter, setSelectedFilter] = useState("Все");
  const categories = ["Работа", "Личное"];
  const filters = ["Все", "Работа", "Личное"];
  useEffect(() => {
    try {
      const data = getTodosFromLocalStorage("todos");
      if (data && data.length > 0) {
        setHighPriorityTodos(data.filter((task) => task.priority === "high"));
        setLowPriorityTodos(data.filter((task) => task.priority === "low"));
      }
    } catch (error) {
      console.log("Error reading from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    if (highPriorityTodos.length || lowPriorityTodos.length) {
      saveTodosToLocalStorage([...highPriorityTodos, ...lowPriorityTodos]);
    } else {
      localStorageRemove("todos");
    }
  }, [highPriorityTodos, lowPriorityTodos]);
  const filterTodos = (todos) => {
    return selectedFilter === "Все"
      ? todos
      : todos.filter((todo) => todo.categorie === selectedFilter);
  };

  const filteredHighPriorityTodos = filterTodos(highPriorityTodos);
  const filteredLowPriorityTodos = filterTodos(lowPriorityTodos);
  return (
    <div className='App'>
      {
        <select
          onChange={(e) => {
            setSelectedFilter(e.target.value);
          }}
        >
          {filters.map((filter) => {
            return (
              <option value={filter} key={`main ${filter}`}>
                {filter}
              </option>
            );
          })}
        </select>
      }
      <TodoList
        priority='high'
        setTodos={setHighPriorityTodos}
        todos={filteredHighPriorityTodos}
        categories={categories}
        selectedCategorie={selectedCategorie}
        setSelectedCategorie={setSelectedCategorie}
        selectedFilter={selectedFilter}
      />
      <TodoList
        priority={"low"}
        setTodos={setLowPriorityTodos}
        todos={filteredLowPriorityTodos}
        categories={categories}
        selectedCategorie={selectedCategorie}
        setSelectedCategorie={setSelectedCategorie}
        selectedFilter={selectedFilter}
      />
    </div>
  );
}

export default App;

export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodosFromLocalStorage = (key) => {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem(key));
  return todosFromLocalStorage || [];
};
export const localStorageRemove = (key) => {
  localStorage.removeItem(key);
};

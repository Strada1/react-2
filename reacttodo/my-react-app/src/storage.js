const storage = {
    saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos))
    },
    getTodos() {
        return JSON.parse(localStorage.getItem("todos")) || []
    }
}

export default storage
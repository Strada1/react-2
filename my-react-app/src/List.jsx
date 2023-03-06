import Task from './Task'

const List = ({ todos, deleteTodo , onChange}) => {
    return (
        <div>
            <div >
                {todos.map(({ id, task, status }) => (
                    <Task
                        key={id}
                        id={id}
                        task={task}
                        status={status}
                        deleteTodo={deleteTodo}
                        todos={todos}
                        onChange={onChange}
                    />
                ))}
            </div>
        </div>
    )
}

export default List
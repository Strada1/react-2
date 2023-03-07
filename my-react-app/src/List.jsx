import Task from './Task'

const List = ({ todos, deleteTodo , onChange}) => {
    return (
        <div>
                {todos.map(({ id, task, status }) => (
                    <Task
                        key={id}
                        id={id}
                        task={task}
                        status={status}
                        deleteTodo={deleteTodo}
                        onChange={onChange}
                    />
                ))}
        </div>
    )
}

export default List
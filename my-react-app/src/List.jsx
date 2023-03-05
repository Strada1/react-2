import Task from './Task'

const List = ({ todos , deleteTodo }) => {

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
                    />
                ))}
            </div>
        </div>
    )
}

export default List
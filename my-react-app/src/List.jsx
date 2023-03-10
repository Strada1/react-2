import Task from './Task';

function List({ list, priority, changePriority, deleteTask }) {
    return (
        <div className={priority + 'PriorityList'}>
            {list.map(({ id, title, status, priority }) => (
                <Task
                    key={id}
                    id={id}
                    title={title}
                    status={status}
                    priority={priority}
                    changePriority={changePriority}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
}

export default List;

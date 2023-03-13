import Task from './Task';

function List({ list, priority, changePriority, deleteTask }) {
    return (
        <div className={priority + 'PriorityList'}>
            {list.map(({ id, title, isDone }) => (
                <Task
                    key={id}
                    id={id}
                    title={title}
                    isDone={isDone}
                    changePriority={changePriority}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
}

export default List;

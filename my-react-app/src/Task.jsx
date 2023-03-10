function Task(props) {
    const { id, title, isDone, changePriority, deleteTask } = props;
    return (
        <div className="task">
            <input
                checked={isDone === true ? true : false}
                onChange={(e) => changePriority(id, isDone)}
                className="checkbox"
                type="checkbox"
            ></input>
            {title}
            <button onClick={() => deleteTask(id)} className="removalButton">
                X
            </button>
        </div>
    );
}

export default Task;

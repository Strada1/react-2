import Task from './Task';

function List(props) {
    return (
        <div className={props.priority + 'PriorityList'}>
            <Task
                key={self.crypto.randomUUID()}
                // onValueChange={(e) => checkboxChenge(e)}
                status="todo"
                addTask={props.addTask}
                inputText={props.inputText}
                priority={props.priority}
                title={props.title}
            />
        </div>
    );
}

export default List;

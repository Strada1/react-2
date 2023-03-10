import Task from './Task';

function List(props) {
    return (
        <div className={props.priority + 'PriorityList'}>
            <Task
                key={self.crypto.randomUUID()}
                // onValueChange={(e) => checkboxChenge(e)}
                status="todo"
                //inputText={props.inputText}
                priority={props.priority}
                title={props.inputText}
            />
        </div>
    );
}

export default List;

import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const PriorityBlock = (props) => {
    const priority = props.priority;
    const tasks = props.list.filter((task) => {
        return task.priority === priority
    });

    return (
        <div className={priority} >
            <h2>{props.title}</h2>
            <AddTaskForm listControl={props.listControl} priority={priority} />
            <TaskList listControl={props.listControl} list={tasks} priority={priority} />
        </div>
    )
}

export default PriorityBlock
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

const PriorityBlock = ({ setList, list, priority, title }) => {
    const tasks = list.filter((task) => {
        return task.priority === priority
    });

    return (
        <div className={priority} >
            <h2>{title}</h2>
            <AddTaskForm setList={setList} priority={priority} />
            <TaskList setList={setList} list={tasks} priority={priority} />
        </div>
    )
}

export default PriorityBlock
const Task = ({ id, task, status, onChange, deleteTodo }) => {
 
  return (
    <div className='item'>
      <input
        id={id}
        status={toString(status)}
        onChange={() => onChange(id)}
        type="checkbox"
        checked={status}
      />
      <label name={id}>
        {task}
      </label>
      <button
        onClick={() => deleteTodo(id)}>
        -
      </button>
    </div>
  )
}

export default Task
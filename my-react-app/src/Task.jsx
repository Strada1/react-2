const Task = ({ id, task, deleteCity, requestWeather }) => {
  async function showTemp(task) {
    try {
      requestWeather(task)
    }
    catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='localCity'>
      <label onClick={() => showTemp(task)} name={id}>
        {task}
      </label>
      <button className="" onClick={() => deleteCity(id)}>
        +
      </button>
    </div>
  )
}

export default Task
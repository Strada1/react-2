const NowTask = ({ id, task, temperature, icon, addCity }) => {
  return (
    <div className='now'>
          <div name={id} className='temp'>
              <img className="icon" src={icon}></img>
              {temperature}
              </div>
          <div className="city">
             <p>{task}</p>
              <button className="" onClick={() => addCity({ id: String(Date.now()), task: task })}>
              Like
              </button>
              </div>
    </div>
  )
}

export default NowTask
import Task from './Task'

const List = ({ cites, deleteCity, requestWeather }) => {
    return (
        <div className='list'>
            <p>Favorite Cities:</p>
            {cites.map(({ id, task }) => (
                    <Task
                        key={id}
                        id={id}
                        task={task}
                        deleteCity={deleteCity}
                        requestWeather={requestWeather}
                    />
                ))}
        </div>
    )
}

export default List
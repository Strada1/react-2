import NowTask from './NowTask'

const NowList = ({ task, temperature, addCity, icon}) => {
    return (
        <div>
            <NowTask
                icon={icon}
                addCity={addCity}
                task={task}
                temperature={temperature}
            />
                
        </div>
    )
}

export default NowList
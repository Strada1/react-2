import { FaSearch} from 'react-icons/fa';



function Search({handleSubmit, setCurrentCity}){

    
    return (
        <form className='formSearch' onSubmit={handleSubmit}>
            <input onChange={e => setCurrentCity(e.target.value)} type="text" className="search" />
            <button className='btn' id="searchCity" type="submit"><FaSearch className='sear'/></button>
        </form>
    )
}
export default Search
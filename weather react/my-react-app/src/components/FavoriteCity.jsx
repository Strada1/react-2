function FavoriteCity({CurrentCity, city, handleSubmit, setCurrentCity, setJson}){

    function handleListSubmit(e){
        
        
        setCurrentCity(city.name);
    
        handleSubmit(e);
        console.log (CurrentCity)
    }

    return(
        <div>
            <p onClick={handleListSubmit}>{city.name}</p>
        </div>
    )
}
export default FavoriteCity
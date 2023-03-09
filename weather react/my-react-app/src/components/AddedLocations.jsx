import FavoriteCity from "./FavoriteCity"

function AddedLocations({cities, handleSubmit, setCurrentCity, CurrentCity, setJson}){


    return(
        <div>
        <div>
        <h2>Added locations</h2>
    </div>
    <div className="listOfCities">
        {cities.map(city => <FavoriteCity setCurrentCity={setCurrentCity} setJson={setJson} CurrentCity={CurrentCity} key={city.id} city={city} handleSubmit={handleSubmit}/>) }
        
    </div>
    </div>
    )
}
export default AddedLocations
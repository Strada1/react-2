import FavoriteCity from "./FavoriteCity"

function AddedLocations({cities, handleSubmit, setCurrentCity, CurrentCity, setJson, Json}){


    return(
        <div>
        <div>
        <h2>Added locations</h2>
    </div>
    <div className="listOfCities">
        {cities.map(city => <FavoriteCity setCurrentCity={setCurrentCity} Json={Json} setJson={setJson} key={city.id} city={city} handleSubmit={handleSubmit}/>) }
        
    </div>
    </div>
    )
}
export default AddedLocations
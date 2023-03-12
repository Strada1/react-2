import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import WeatherBlock from "./Components/WeatherBlock";
import { API_KEY, API_URL } from "./const";
import axios from "axios";
import FavoriteCities from "./Components/FavoriteCities";
import Blocks from "./Components/Blocks";

function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const handleChangeInput = async (e) => {
    setCityName(e.target.value);
  };
  const handleSubmit = async (e, city) => {
    if (city.length === 0) return;
    try {
      const urlToCall = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      e.preventDefault();
      const resp = await axios.get(urlToCall);
      setWeather(resp.data);
    } catch (e) {
      alert(e.message);
    } finally {
      city === cityName ? setCityName("") : setCityName(city);
    }
  };
  const addToFavorite = () => {
    if (
      favoriteCities.length &&
      favoriteCities.some((city) => city == cityName)
    )
      return alert("Already in list");
    setFavoriteCities((prev) => [...prev, weather.name]);
  };
  const handleClickOnFavoriteCity = (e) => {
    handleSubmit(e, e.target.textContent);
  };

  return (
    <div className='App'>
      <div className='container'>
        <form onSubmit={(e) => handleSubmit(e, cityName)}>
          <Input
            onChange={handleChangeInput}
            value={cityName}
            placeholder={"Input city name..."}
            onClick={(e) => handleSubmit(e, cityName)}
          />
        </form>
      </div>
      {weather && (
        <WeatherBlock weatherData={weather} handleFav={addToFavorite} />
      )}
      {
        <Blocks
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          weatherInfo={weather}
        />
      }
      {favoriteCities.length > 0 && (
        <>
          <h3>Liked cities:</h3>
          <FavoriteCities
            cities={favoriteCities}
            handleApiCall={handleClickOnFavoriteCity}
          />
        </>
      )}
    </div>
  );
}

export default App;

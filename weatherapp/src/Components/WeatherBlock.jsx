import React from "react";

const WeatherBlock = ({ weatherData, handleFav, isAdded }) => {
  const { main, weather, name } = weatherData;

  return (
    <div>
      <div>{name}</div>
      <div>
        <span>Feels like: {main.feels_like}</span>
      </div>
      <div>
        <span>Temperature: {main.temp}</span>
      </div>
      <div>
        <span>Max temperature: {main.temp_max}</span>
      </div>
      <div>
        <span>Min temperature: {main.temp_min}</span>
      </div>
      <div>
        <span>Overall description: {weather[0].description}</span>
      </div>
      <button onClick={handleFav}>Add to fav</button>
    </div>
  );
};

export default WeatherBlock;

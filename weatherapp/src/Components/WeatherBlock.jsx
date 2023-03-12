import React from "react";

const WeatherBlock = ({ weatherData, handleFav }) => {
  const { main, weather, name } = weatherData;

  return (
    <div>
      <div>{name}</div>
      <div>
        <span>Feels like: {main.feels_like}</span>
      </div>
      <div>
        <span>Overall description: {weather[0].description}</span>
      </div>
      <button onClick={handleFav}>Add to fav</button>
    </div>
  );
};

export default WeatherBlock;

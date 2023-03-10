import React from "react";
import FavCity from "./FavCity";

const FavCities = ({ cities, handleApiCall }) => {
  return (
    <div>
      {cities.map((city) => (
        <FavCity handleApiCall={handleApiCall} city={city} key={city} />
      ))}
    </div>
  );
};

export default FavCities;

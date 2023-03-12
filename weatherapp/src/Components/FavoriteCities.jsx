import React from "react";
import FavoriteCity from "./FavoriteCity";

const FavoriteCities = ({ cities, handleApiCall }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {cities.map((city) => (
        <FavoriteCity handleApiCall={handleApiCall} city={city} key={city} />
      ))}
    </div>
  );
};

export default FavoriteCities;

import React from "react";

const FavoriteCity = ({ city, handleApiCall }) => {
  return (
    <span
      className='fav_city'
      style={{ cursor: "pointer" }}
      onClick={handleApiCall}
    >
      {city}
    </span>
  );
};

export default FavoriteCity;

import React from "react";

const FavCity = ({ city, handleApiCall }) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={handleApiCall}>
      {city}
    </div>
  );
};

export default FavCity;

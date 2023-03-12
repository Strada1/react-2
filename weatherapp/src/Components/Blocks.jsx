import React from "react";

const Blocks = ({ selectedId, setSelectedId, weatherInfo }) => {
  const blocks = ["Weather", "Temperature"];

  return (
    <>
      {weatherInfo && blocks[selectedId] === "Temperature" && (
        <div>
          <div>
            <span>Temperature: {weatherInfo.main.temp}</span>
          </div>
          <div>
            <span>Max temperature: {weatherInfo.main.temp_max}</span>
          </div>
          <div>
            <span>Min temperature: {weatherInfo.main.temp_min}</span>
          </div>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {blocks.map((block, i) => (
          <div
            onClick={() => {
              setSelectedId(i);
            }}
            style={{ color: selectedId === i ? "blue" : "black" }}
          >
            {block}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blocks;

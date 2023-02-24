import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} style={{ marginRight: "5px" }}>
      {text}
    </button>
  );
};

export default Button;

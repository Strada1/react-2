import React from "react";

function Button({ colour, text }) {
  return <button style={{ background: colour }}>{text}</button>;
}

export default Button;

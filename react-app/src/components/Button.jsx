import React from "react";
import "./style.css";

export default function Button({ type }) {
  return (
    <button className="btn" type={type}>
      Клик!
    </button>
  );
}

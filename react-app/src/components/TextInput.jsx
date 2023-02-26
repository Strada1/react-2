import React from "react";
import "./style.css";

export default function textInput({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} />;
}

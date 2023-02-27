import React from "react";
import "./style.css";

export default function textInput({ type, placeholder, onChange, value }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

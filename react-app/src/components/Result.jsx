import React from "react";
import "./style.css";

export default function result({ name, sex, probability }) {
  function convertToPercents(num) {
    let str = num.toString();
    return str.length > 1 ? str.slice(2, 4) : (str = str + "00");
  }

  return (
    <div className="result">
      {sex
        ? `${name} is ${sex} with ${convertToPercents(
            probability
          )}% probability`
        : "Пол не определен"}
    </div>
  );
}

import React from "react";
import ResultSuccess from "./ResultSuccess";
import ResultError from "./ResultError";
import "./style.css";

export default function result({ name, sex, probability }) {
  function convertToPercents(num) {
    let str = num.toString();
    return str.length > 1 ? str.slice(2, 4) : (str = str + "00");
  }

  function checkNamesLength(inputName) {
    console.log(sex);
    return inputName == undefined || inputName.length > 2 ? (
      <ResultSuccess
        name={name}
        sex={sex}
        probability={probability}
        convertToPercents={convertToPercents}
      />
    ) : (
      <ResultError />
    );
  }

  return <div className="result">{checkNamesLength(name)}</div>;
}

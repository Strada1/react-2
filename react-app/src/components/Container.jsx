import React from "react";
import Form from "./Form";
import Result from "./Result";
import "./style.css";

export default function container() {
  return (
    <div className="container">
      <Form />
      <Result />
    </div>
  );
}

import React from "react";
import "./Form.css";
import Input from "../Input/Input";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

export default function Form() {
  return (
    <form action="" className="to-do-form">
      <Input />
      <ButtonAdd />
    </form>
  );
}

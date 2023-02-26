import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

export default function Form() {
  return (
    <form action="" type="submit" className="form">
      <TextInput type="text" placeholder="Введите имя" />
      <Button type="submit" />
    </form>
  );
}

import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

export default function Form({ handleSubmit, name, changeName }) {
  return (
    <form action="" type="submit" onSubmit={handleSubmit} className="form">
      <TextInput
        type="text"
        value={name}
        placeholder="Введите имя"
        onChange={changeName}
      />
      <Button type="submit" />
    </form>
  );
}

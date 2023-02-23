import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";

export const Layout = () => {
  return (
    <form
      style={{
        display: "flex",
        width: "250px",
        justifyContent: "space-between",
      }}
    >
      <TextInput />
      <Button text={"Отправить"} />
    </form>
  );
};

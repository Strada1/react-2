import React from "react";

const TextInput = ({ isError, errorText, name, setName }) => {
  return (
    <div>
      <input
        type={"text"}
        placeholder='Введите имя'
        value={name}
        onChange={setName}
        style={{
          marginRight: "5px",
          borderRadius: "6px",
          border: "1px solid grey",
        }}
      ></input>
      <br />
      {isError && <div style={{ display: "block" }}>{errorText}</div>}
    </div>
  );
};

export default TextInput;

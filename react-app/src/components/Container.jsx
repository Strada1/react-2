import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import Title from "./Title";
import "./style.css";

const defaultValue = "";

export default function container() {
  const [name, setName] = useState(defaultValue);
  const [request, setRequest] = useState(defaultValue);

  async function getSexByName(firstName) {
    const serverUrl = "https://api.genderize.io";
    const url = `${serverUrl}?name=${firstName}`;

    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      setRequest(json);
      let result = await json;
      console.log(result);
      return result;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  function changeName(e) {
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await getSexByName(name);
    setName(defaultValue);
  }

  return (
    <div className="container">
      <Title text="Определение пола человека по его имени" />
      <Form handleSubmit={handleSubmit} name={name} changeName={changeName} />
      <Result
        stateName={name}
        sex={request.gender}
        name={request.name}
        probability={request.probability}
      />
    </div>
  );
}

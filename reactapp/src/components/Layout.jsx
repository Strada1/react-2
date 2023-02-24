import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import { ERROR_MESSAGES } from "../const";
import { fetchName } from "../api/getName";
import GenderParagraph from "./genderParagraph";

export const Layout = () => {
  const [name, setName] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isError, setIsError] = useState(false);
  const [gender, setGender] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nameValidation = (nameString) => {
    const reg = /^[a-zA-Z]/;
    if (nameString.length === 0) {
      setErrorText(ERROR_MESSAGES.NO_NAME);
      setName("");
      return false;
    }
    if (!reg.test(nameString)) {
      setErrorText(ERROR_MESSAGES.NOT_VALID_NAME);
      setName("");
      return false;
    }
    return true;
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!nameValidation(name)) return setIsError(true);
    setIsLoading(true);
    fetchName(name)
      .then((d) => {
        setGender(d.gender);
        setIsError(false);
        setIsSuccess(true);
        setName("");
        console.log(gender);
      })
      .catch(() => {
        setIsError(true);
        setErrorText(ERROR_MESSAGES.SERVER_ERROR);
        setIsSuccess(false);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <form style={{ display: "flex", alignItems: "flex-start" }}>
      <TextInput
        isError={isError}
        errorText={errorText}
        name={name}
        setName={handleInputChange}
      />
      <Button text={"Отправить"} handleClick={handleButtonClick} />
      {isSuccess && <GenderParagraph gender={gender} />}
      {isLoading && <span>Загрузка...</span>}
    </form>
  );
};

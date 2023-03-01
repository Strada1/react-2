import { useState } from 'react';
import Button from './Form/Button';
import TextInput from './Form/TextInput';
import TextError from './Form/TextError';
import Form from './Form/Form';
import ResultOutput from './ResultOutput';

const URL = 'https://api.genderize.io';

function Main() {
  const [inputText, setText] = useState('');
  const [textError, setTextError] = useState(false);
  const [requestResult, setRequestResult] = useState('');

  const makeRequest = async () => {
    const serverUrl = `${URL}?name=${inputText}`;
    const response = await fetch(serverUrl);
    if (response.ok) {
      const json = await response.json();
      setRequestResult(json);
      setText('');
    }
  };

  const checkErrorText = (text) => {
    const reg = /[^a-z]/i;
    const { length } = text;
    const result = text.match(reg) ?? length < 2 ?? length > 29;
    setTextError(result);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    checkErrorText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textError) makeRequest();
  };

  return (
    <div className="App">
      <Form className="genderize genderize__form" onSubmit={handleSubmit}>
        <TextInput
          onChange={handleChange}
          className="genderize__input"
          value={inputText}
        />
        {textError && <TextError value={inputText} />}
        <Button className="genderize__button" text="Узнать" />
      </Form>
      <ResultOutput className="genderize__output" result={requestResult} />
    </div>
  );
}

export default Main;

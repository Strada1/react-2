import { useState, useEffect } from 'react';
import { genderize } from '../../core/constants/genderize';
import sendRequest from '../../core/request';
import useDebounce from '../../core/debounce';
import Result from './result/Result';
import Form from './form/Form';
import TextInput from './form/TextInput';
import Button from './form/Button';
import InputError from './form/InputError';

function Main({ form, result }) {
  const [inputValue, setInputValue] = useState('');
  const [validate, setValidate] = useState(true);
  const [data, setData] = useState({ gender: null, name: null });

  const findGenderByName = (firstName) => {
    const url = `${genderize.serverUrl}?name=${firstName}`;
    sendRequest(url).then(({ gender, name }) => setData({ gender, name }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.match(genderize.nameRegex)) return;
    findGenderByName(inputValue);
    setInputValue('');
  };

  const debouncedValue = useDebounce(inputValue);
  const handleValue = ({ target }) => setInputValue(target.value);

  useEffect(
    () => {
      debouncedValue !== '' && !debouncedValue.match(genderize.nameRegex) ? setValidate(false) : setValidate(true);
    },
    [debouncedValue],
  );

  const { input, inputError, button } = form.children;

  return (
    <main>
      <Form className={form.className} onSubmit={handleSubmit}>
        <TextInput {...{ ...input, onInput: handleValue, value: inputValue }} />
        {!validate && <InputError {...inputError} />}
        <Button {...button} />
      </Form>
      <Result {...{ ...result, gender: data.gender, name: data.name }} />
    </main>
  );
}

export default Main;

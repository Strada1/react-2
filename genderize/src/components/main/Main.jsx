import { useState, useEffect } from 'react';
import { genderize } from '../../core/constants/genderize';
import CustomError from '../../core/error';
import sendRequest from '../../core/request';
import useDebounce from '../../core/debounce';
import Result from './result/Result';
import Form from './form/Form';

function Main({ parameters: { form, result } }) {
  const [data, setData] = useState({ gender: null, name: null });
  const [control, setControl] = useState({ hasError: false, message: null, beforeRequest: true });
  const [inputValue, setInputValue] = useState('');

  const findGenderByName = (firstName) => {
    const url = `${genderize.serverUrl}?name=${firstName}`;
    sendRequest(url).then(({ gender, name }) => {
      if (!gender) throw new CustomError(CustomError.ERROR.NOT_FOUND);
      setControl({ hasError: false });
      setData({ gender, name });
    }).catch((error) => {
      setControl({ hasError: true, message: error.message, beforeRequest: false });
    });
  };

  const validateValue = (value) => {
    try {
      if (value !== '' && !value.match(CustomError.nameRegex)) {
        throw new CustomError(CustomError.ERROR.INCORRECT_NAME);
      }
      setControl({ hasError: false });
    } catch (error) {
      setControl({ hasError: true, message: error.message });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.name;
    validateValue(value);
    if (value !== '' && !control.hasError) {
      findGenderByName(value);
      event.target.reset();
    }
  };

  const debouncedValue = useDebounce(inputValue);
  const handleValue = ({ target }) => setInputValue(target.value);

  useEffect(
    () => {
      validateValue(debouncedValue);
    },
    [debouncedValue],
  );

  return (
    <main>
      <Form parameters={form} onSubmit={handleSubmit} onInput={handleValue} />
      <Result parameters={result} error={control.message} data={data} />
    </main>
  );
}

export default Main;

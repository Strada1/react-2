import { useState, useEffect } from 'react';

const useLocalStorage = (key) => {
  const saveValue = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error.message);
    }
  };

  const getValue = () => {
    try {
      return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : [];
    } catch (error) {
      return [];
    }
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    saveValue(value, key);
  }, [value]);

  return [value, setValue];
};

export { useLocalStorage };

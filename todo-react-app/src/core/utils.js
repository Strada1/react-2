import { useState } from 'react';
import { STORAGE, VALUE } from './constants';

const useNewId = () => {
  const [id, setId] = useState(VALUE.ZERO);
  const incrementId = (taskList) => {
    setId(taskList.length === VALUE.ZERO ? VALUE.ZERO : taskList[0].id + 1);
  };
  return [id, incrementId];
};

const storage = {
  saveTaskList(list) {
    try {
      localStorage.setItem(STORAGE.TODO_LIST, JSON.stringify(list));
    } catch (error) {
      console.error(error.message);
    }
  },
  getTaskList() {
    try {
      return localStorage.getItem(STORAGE.TODO_LIST)
        ? JSON.parse(localStorage.getItem(STORAGE.TODO_LIST))
        : [];
    } catch (error) {
      console.error(error.message);
      return [];
    }
  },
};

const padTo2Digits = (number) => number.toString().padStart(2, '0');
const cut2Digits = (value) => value.toString().slice(-2);
const getMonthNumber = (date) => padTo2Digits(date.getMonth() + 1);

const dateManipulation = {
  convert(inputDate) {
    const fullDate = new Date(inputDate);
    const day = padTo2Digits(fullDate.getDate());
    const month = getMonthNumber(fullDate);
    const year = cut2Digits(fullDate.getFullYear());
    const date = `${day}.${month}.${year}`;
    return date;
  },
  check(inputDate) {
    const currentDate = new Date();
    const fullDate = new Date(inputDate);
    const maxDate = dateManipulation.getMaxDate(currentDate);
    return !!((fullDate < currentDate || fullDate > maxDate));
  },
  getMaxDate(date) {
    return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
  },
};

export { dateManipulation, useNewId, storage };

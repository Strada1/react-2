import { useState } from 'react';
import { TITLE, VALUE, PRIORITY } from './constants';

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
      localStorage.setItem(TITLE.TODO_LIST, JSON.stringify(list));
    } catch (error) {
      console.error(error.message);
    }
  },
  getTaskList() {
    try {
      return localStorage.getItem(TITLE.TODO_LIST)
        ? JSON.parse(localStorage.getItem(TITLE.TODO_LIST))
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

const dateAction = {
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
    const maxDate = dateAction.getMaxDate(currentDate);
    return !!((fullDate < currentDate || fullDate > maxDate));
  },
  getMaxDate(date) {
    return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
  },
};

const filterList = (list, value) => list.filter(({ status }) => status === value);

const sortList = (list) => {
  const newList = list.sort((a, b) => {
    const priorityA = PRIORITY.findIndex((p) => p === a.priority);
    const priorityB = PRIORITY.findIndex((p) => p === b.priority);
    if (priorityA > priorityB) return -1;
    if (priorityA < priorityB) return 1;
    return 0;
  });
  return newList;
};

export {
  dateAction, useNewId, storage, sortList, filterList,
};

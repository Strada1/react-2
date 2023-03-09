import { PRIORITY, ICON } from './constants';

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
  list.sort((a, b) => {
    const priorityA = PRIORITY.findIndex((item) => item === a.priority);
    const priorityB = PRIORITY.findIndex((item) => item === b.priority);
    if (priorityA > priorityB) return -1;
    if (priorityA < priorityB) return 1;
    return 0;
  });
  return list;
};

const defineIcon = (status) => (status ? ICON.CIRCLE_ARROW : ICON.CHECK);

export {
  dateAction, sortList, filterList, defineIcon,
};

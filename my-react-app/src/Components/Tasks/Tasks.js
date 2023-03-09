const PRIORITY = {
  HIGH: "high",
  LOW: "low",
};

const STATUS = {
  DONE: true,
  UNDONE: false,
};

const tasks = [
  {
    name: "Сверстать этот ТуДу Лист",
    priority: PRIORITY.HIGH,
    isDone: STATUS.UNDONE,
  },
  {
    name: "Посмотреть ютубчик",
    priority: PRIORITY.LOW,
    isDone: STATUS.UNDONE,
  },
  {
    name: "Закрыть долги по учебе",
    priority: PRIORITY.HIGH,
    isDone: STATUS.UNDONE,
  },
  {
    name: "Подать заявки на стажировки",
    priority: PRIORITY.HIGH,
    isDone: STATUS.UNDONE,
  },
  {
    name: "Нагнать второй модуль",
    priority: PRIORITY.LOW,
    isDone: STATUS.UNDONE,
  },
];

export { tasks, PRIORITY };

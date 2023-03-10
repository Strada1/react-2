import { useState, useEffect } from 'react';
import { useNewId } from './useNewId';
import { useLocalStorage } from './useLocalStorage';
import { dateAction, sortList, filterList } from '../core/utils';
import {
  TITLE, VALUE, STATUS, TASK_KEY,
} from '../core/constants';

const useTodoList = () => {
  const [list, setList] = useLocalStorage(TITLE.TODO_LIST);
  const [control, setControl] = useState({ error: false });
  const [change, setChange] = useState({ priority: false, date: false });
  const [id, incrementId] = useNewId();

  const addTask = (text, date, priority) => {
    const newTask = {
      id,
      text,
      priority,
      status: STATUS.TODO,
      date: !date ? VALUE.DEFAULT : dateAction.convert(date),
    };
    const newTaskList = [...list, newTask];
    setList(newTaskList);
  };

  const deleteTask = (taskId) => {
    const newTaskList = list.filter((item) => item.id !== taskId);
    setList(newTaskList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { text, date, priority } = event.target;

    if (!text.value) return setControl({ error: true, message: VALUE.ERROR_TASK });
    if (dateAction.check(date.value)) return setControl({ error: true, message: VALUE.ERROR_DATE });

    addTask(text.value.trim(), date.value, priority.value);
    return event.target.reset();
  };

  const setDateError = () => setControl({ error: true, message: VALUE.ERROR_DATE });
  const closeSetting = () => setChange({ priority: false, date: false });

  const openSetting = (taskId, type) => {
    if (type === TASK_KEY.PRIORITY) setChange({ ...change, priority: !change.priority, taskId });
    if (type === TASK_KEY.DATE) setChange({ ...change, date: !change.date, taskId });
  };

  const changeTask = (taskId, value, newValue) => {
    const newTaskList = list.map((item) => (
      item.id === taskId ? { ...item, [value]: newValue } : item));
    const handler = setTimeout(() => {
      setList(newTaskList);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  };

  useEffect(
    () => {
      incrementId(list);
      setControl({ error: false });
      closeSetting();
    },
    [list],
  );

  const handlersProps = {
    changeTask, deleteTask, setDateError, change, openSetting,
  };

  const defineLists = () => {
    if (list.length === 0) return null;
    const filteredLists = [
      {
        ...handlersProps,
        list: sortList(filterList(list, STATUS.TODO)),
        title: TITLE.TASKS,
        key: TITLE.TASKS,
      },
      {
        ...handlersProps,
        list: sortList(filterList(list, STATUS.DONE)),
        title: TITLE.HISTORY,
        key: TITLE.HISTORY,
      },
    ];
    return filteredLists;
  };

  return { handleSubmit, control, lists: defineLists() };
};

export { useTodoList };

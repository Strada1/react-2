import { useState, useEffect } from 'react';
import { dateAction, useNewId, storage } from '../../core/utils';
import { InputError } from '../../components/input/InputError';
import { Form } from '../../components/Form';
import { List } from '../list/List';
import {
  CLASS, STATUS, TASK_KEY, TITLE, VALUE,
} from '../../core/constants';
import './Main.css';

function Main() {
  const [taskList, setTaskList] = useState(storage.getTaskList());
  const [control, setControl] = useState({ error: false });
  const [change, setChange] = useState({ priority: false, date: false });
  const [id, incrementId] = useNewId();

  const updateTaskList = (list) => {
    setTaskList(list);
    storage.saveTaskList(list);
  };

  const addTask = (text, date, priority) => {
    const newTask = {
      id,
      text,
      priority,
      status: STATUS.TODO,
      date: !date ? VALUE.DEFAULT : dateAction.convert(date),
    };
    const newTaskList = [newTask, ...taskList];
    updateTaskList(newTaskList);
  };

  const deleteTask = (taskId) => {
    const newTaskList = taskList.filter((item) => item.id !== taskId);
    updateTaskList(newTaskList);
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
    if (!type) closeSetting();
    if (type === TASK_KEY.PRIORITY) setChange({ ...change, priority: !change.priority, taskId });
    if (type === TASK_KEY.DATE) setChange({ ...change, date: !change.date, taskId });
  };

  const changeTask = (taskId, value, newValue) => {
    const newTaskList = taskList.map((item) => (
      item.id === taskId ? { ...item, [value]: newValue } : item));
    updateTaskList(newTaskList);
    closeSetting();
  };

  useEffect(
    () => {
      incrementId(taskList);
      setControl({ error: false });
    },
    [taskList],
  );

  const defineList = (value) => taskList.filter(({ status }) => status === value);
  const listProps = {
    changeTask, deleteTask, setDateError, change, openSetting,
  };

  const lists = [
    {
      ...listProps,
      list: defineList(STATUS.TODO),
      title: TITLE.TASKS,
      key: TITLE.TASKS,
    },
    {
      ...listProps,
      list: defineList(STATUS.DONE),
      title: TITLE.HISTORY,
      key: TITLE.HISTORY,
    },
  ];

  return (
    <main className={CLASS.MAIN}>
      <Form onSubmit={handleSubmit} />
      {control.error && <InputError message={control.message} />}
      {taskList.length !== 0 && lists.map(
        (listTasks) => (
          <List
            {...listTasks}
            className={listTasks.list.length !== 0 ? CLASS.SECTION : CLASS.NONE}
          />
        ),
      )}
    </main>
  );
}

export { Main };

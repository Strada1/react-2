import { useState, useEffect } from 'react';
import { dateAction, useNewId, storage } from '../../core/utils';
import { InputError } from '../../components/input/InputError';
import { Form } from '../../components/Form';
import { List } from '../list/List';
import {
  CLASS, STATUS, TITLE, VALUE,
} from '../../core/constants';
import './Main.css';

function Main() {
  const [taskList, setTaskList] = useState(storage.getTaskList());
  const [control, setControl] = useState({ error: false });
  const [id, incrementId] = useNewId();
  const [task, setTask] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const { text, date, priority } = event.target;

    if (!text.value) return setControl({ error: true, message: VALUE.ERROR_TASK });
    if (dateAction.check(date.value)) return setControl({ error: true, message: VALUE.ERROR_DATE });

    const newTask = {
      text: text.value,
      date: !date.value ? VALUE.DEFAULT : dateAction.convert(date.value),
      priority: priority.value,
    };

    setTask(newTask);
    setControl({ error: false });
    incrementId(taskList);
    return event.target.reset();
  };

  const updateTaskList = (list) => {
    setTaskList(list);
    storage.saveTaskList(list);
  };

  const changeTask = (taskId, value, newValue) => {
    const newTaskList = taskList.map((item) => (
      item.id === taskId ? { ...item, [value]: newValue } : item));
    setControl({ error: false });
    updateTaskList(newTaskList);
  };

  const deleteTask = (taskId) => {
    const newTaskList = taskList.filter((item) => item.id !== taskId);
    updateTaskList(newTaskList);
  };

  const setDateError = () => setControl({ error: true, message: VALUE.ERROR_DATE });

  useEffect(
    () => {
      if (!task.text) return;
      const newTask = { ...task, id, status: STATUS.TODO };
      const newTaskList = [newTask, ...taskList];
      updateTaskList(newTaskList);
    },
    [task],
  );

  useEffect(
    () => {
      setControl({ ...control, display: true });
      const timer = setTimeout(() => setControl({ error: false, display: false }), 3000);
      return () => clearTimeout(timer);
    },
    [control.error],
  );

  const defineList = (value) => taskList.filter(({ status }) => status === value);
  const listProps = { changeTask, deleteTask, setDateError };
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
      {control.display && <InputError message={control.message} />}
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

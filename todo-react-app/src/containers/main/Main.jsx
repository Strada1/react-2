import { useState, useEffect } from 'react';
import { dateManipulation, useNewId, storage } from '../../core/utils';
import { STATUS, TITLE, VALUE } from '../../core/constants';
import { InputError } from '../../components/input/InputError';
import { Form } from '../../components/Form';
import { List } from '../list/List';
import './Main.css';

function Main() {
  const [taskList, setTaskList] = useState(storage.getTaskList());
  const [hasError, setHasError] = useState(false);
  const [id, incrementId] = useNewId();
  const [task, setTask] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const { text, date, priority } = event.target;

    if (!text.value || dateManipulation.check(date.value)) {
      setHasError(true);
      return;
    }

    const newTask = {
      text: text.value,
      date: !date.value ? VALUE.DEFAULT : dateManipulation.convert(date.value),
      priority: priority.value,
    };

    setTask(newTask);
    setHasError(false);
    incrementId(taskList);
    event.target.reset();
  };

  const updateTaskList = (list) => {
    setTaskList(list);
    storage.saveTaskList(list);
  };

  const changeTask = (taskId, value, newValue) => {
    const newTaskList = taskList.map((item) => (
      item.id === taskId ? { ...item, [value]: newValue } : item));
    updateTaskList(newTaskList);
  };

  const deleteTask = (taskId) => {
    const newTaskList = taskList.filter((item) => item.id !== taskId);
    updateTaskList(newTaskList);
  };

  useEffect(
    () => {
      if (!task.text) return;
      const newTask = { ...task, id, status: STATUS.TODO };
      const newTaskList = [newTask, ...taskList];
      updateTaskList(newTaskList);
    },
    [task],
  );

  const defineList = (value) => taskList.filter(({ status }) => status === value);
  const listProps = { changeTask, deleteTask };
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
    <main className="main">
      <Form onSubmit={handleSubmit} />
      {hasError && <InputError />}
      {taskList.length !== 0 && lists.map((listTasks) => <List {...listTasks} />)}
    </main>
  );
}

export { Main };

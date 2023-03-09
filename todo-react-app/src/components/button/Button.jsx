import {
  ACTION, CLASS, TASK_KEY, TYPE,
} from '../../core/constants';
import './Button.css';

function Button(props) {
  const {
    children, option, id, deleteTask, openSetting,
  } = props;

  let type = TYPE.BUTTON.BUTTON;
  let handler;

  switch (option) {
    case ACTION.DELETE:
      handler = () => deleteTask(id);
      break;
    case ACTION.UPDATE:
      handler = () => openSetting(id, TASK_KEY.DATE);
      break;
    case ACTION.CHANGE:
      handler = () => openSetting(id, TASK_KEY.PRIORITY);
      break;
    case ACTION.ADD:
      type = TYPE.BUTTON.SUBMIT;
      handler = null;
      break;
    default:
      throw new Error();
  }

  return (
    <label>
      <button className={CLASS.BUTTON} type={type} onClick={handler}>{children}</button>
    </label>
  );
}

export { Button };

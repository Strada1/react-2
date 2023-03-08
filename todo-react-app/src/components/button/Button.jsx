import { ACTION, PREFIX, TYPE } from '../../core/constants';
import './Button.css';

function Button(props) {
  const {
    children, option, id, deleteTask, handlerPriority, handlerDate,
  } = props;

  let type = TYPE.BUTTON.BUTTON;
  let handler;

  switch (option) {
    case ACTION.DELETE:
      handler = () => deleteTask(id);
      break;
    case ACTION.UPDATE:
      handler = () => handlerDate(id);
      break;
    case ACTION.CHANGE:
      handler = () => handlerPriority(id);
      break;
    case ACTION.ADD:
      type = TYPE.BUTTON.SUBMIT;
      break;
    default:
      throw new Error();
  }

  return (
    <label>
      <button className={PREFIX.BUTTON} type={type} onClick={handler}>{children}</button>
    </label>
  );
}

export { Button };

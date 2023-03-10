import {
  CLASS, TASK_KEY, TYPE, VALUE,
} from '../../../core/constants';
import './RadioInput.css';

function RadioInput(props) {
  const {
    option, header, changeTask, id,
  } = props;

  const onChange = !header ? ({ target }) => changeTask(id, TASK_KEY.PRIORITY, target.value) : null;

  return (
    <label className={`${CLASS.LABEL}-${TYPE.INPUT.RADIO}`}>
      <input
        type={TYPE.INPUT.RADIO}
        name={TASK_KEY.PRIORITY}
        className={`${CLASS.INPUT}-${TASK_KEY.PRIORITY} ${option}`}
        value={option}
        onChange={onChange}
      />
      <span>{header ? option : VALUE.DEFAULT}</span>
    </label>
  );
}

export { RadioInput };

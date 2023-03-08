import { PREFIX, TASK_KEY, TYPE } from '../../../core/constants';
import './CheckboxInput.css';

function CheckboxInput({
  children, changeTask, status, id,
}) {
  return (
    <label className={`${PREFIX.LABEL}-${TYPE.INPUT.CHECKBOX}`}>
      <input
        type={TYPE.INPUT.CHECKBOX}
        name={TYPE.INPUT.CHECKBOX}
        className={`${PREFIX.INPUT}-${TYPE.INPUT.CHECKBOX}`}
        checked={status}
        onChange={({ target }) => changeTask(id, TASK_KEY.STATUS, target.checked)}
      />
      {children}
    </label>
  );
}

export { CheckboxInput };

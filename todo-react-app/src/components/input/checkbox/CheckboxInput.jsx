import { CLASS, TASK_KEY, TYPE } from '../../../core/constants';

function CheckboxInput({
  children, changeTask, status, id,
}) {
  return (
    <label className={`${CLASS.LABEL}-${TYPE.INPUT.CHECKBOX}`}>
      <input
        type={TYPE.INPUT.CHECKBOX}
        name={TYPE.INPUT.CHECKBOX}
        className={`${CLASS.INPUT}-${TYPE.INPUT.CHECKBOX} ${CLASS.NONE}`}
        checked={status}
        onChange={({ target }) => changeTask(id, TASK_KEY.STATUS, target.checked)}
      />
      {children}
    </label>
  );
}

export { CheckboxInput };

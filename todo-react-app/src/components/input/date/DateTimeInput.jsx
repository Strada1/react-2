import { dateAction } from '../../../core/utils';
import {
  CLASS, TASK_KEY, TITLE, TYPE, VALUE,
} from '../../../core/constants';
import '../Input.css';

function DateTimeInput(props) {
  const {
    header, changeTask, id, setDateError,
  } = props;

  const onChange = !header
    ? ({ target }) => {
      if (dateAction.check(target.value)) return setDateError();
      const date = !target.value ? VALUE.DEFAULT : dateAction.convert(target.value);
      return changeTask(id, TASK_KEY.DATE, date);
    }
    : null;

  return (
    <label className={`${CLASS.LABEL}-${TASK_KEY.DATE}`}>
      {header ? TITLE.DATE : VALUE.DEFAULT}
      <input
        type={TYPE.INPUT.DATETIME_LOCAL}
        name={TASK_KEY.DATE}
        className={`${CLASS.INPUT}-${TASK_KEY.DATE}`}
        onChange={onChange}
      />
    </label>
  );
}

export { DateTimeInput };

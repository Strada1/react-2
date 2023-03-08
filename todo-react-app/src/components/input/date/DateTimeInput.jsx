import { defineProps, inputProps } from '../Input';
import {
  CLASS, TASK_KEY, TITLE, TYPE, VALUE,
} from '../../../core/constants';
import '../Input.css';

function DateTimeInput(props) {
  const { header } = props;
  const handlers = !header ? defineProps(props, TYPE.INPUT.DATETIME_LOCAL) : inputProps;
  return (
    <label className={`${CLASS.LABEL}-${TASK_KEY.DATE}`}>
      {header ? TITLE.DATE : VALUE.DEFAULT}
      <input
        type={TYPE.INPUT.DATETIME_LOCAL}
        name={TASK_KEY.DATE}
        className={`${CLASS.INPUT}-${TASK_KEY.DATE}`}
        {...handlers}
      />
    </label>
  );
}

export { DateTimeInput };

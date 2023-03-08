import { defineProps, inputProps } from '../Input';
import {
  PREFIX, TASK_KEY, TYPE, VALUE,
} from '../../../core/constants';
import './RadioInput.css';

function RadioInput(props) {
  const { option, header } = props;
  const handlers = !header ? defineProps(props, TYPE.INPUT.RADIO) : inputProps;
  return (
    <label className={`${PREFIX.LABEL}-${TYPE.INPUT.RADIO}`}>
      <input
        type={TYPE.INPUT.RADIO}
        name={TASK_KEY.PRIORITY}
        className={`${PREFIX.INPUT}-${TASK_KEY.PRIORITY} ${option}`}
        value={option}
        {...handlers}
      />
      <span>{header ? option : VALUE.DEFAULT}</span>
    </label>
  );
}

export { RadioInput };

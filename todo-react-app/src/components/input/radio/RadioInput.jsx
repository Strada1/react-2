import { defineProps, inputProps } from '../Input';
import {
  CLASS, TASK_KEY, TYPE, VALUE,
} from '../../../core/constants';
import './RadioInput.css';

function RadioInput(props) {
  const { option, header } = props;
  const handlers = !header ? defineProps(props, TYPE.INPUT.RADIO) : inputProps;
  return (
    <label className={`${CLASS.LABEL}-${TYPE.INPUT.RADIO}`}>
      <input
        type={TYPE.INPUT.RADIO}
        name={TASK_KEY.PRIORITY}
        className={`${CLASS.INPUT}-${TASK_KEY.PRIORITY} ${option}`}
        value={option}
        {...handlers}
      />
      <span>{header ? option : VALUE.DEFAULT}</span>
    </label>
  );
}

export { RadioInput };

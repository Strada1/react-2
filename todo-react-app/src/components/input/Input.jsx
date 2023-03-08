import { dateManipulation } from '../../core/utils';
import {
  TASK_KEY, TYPE, VALUE, TITLE, PREFIX,
} from '../../core/constants';
import './Input.css';

const inputProps = {};

const defineProps = ({ changeTask, onBlur, id }, type) => {
  try {
    inputProps.onBlur = onBlur;

    switch (type) {
      case TYPE.INPUT.RADIO:
        inputProps.onChange = ({ target }) => changeTask(id, TASK_KEY.PRIORITY, target.value);
        return inputProps;
      case TYPE.INPUT.DATETIME_LOCAL:
        inputProps.onChange = ({ target }) => {
          if (dateManipulation.check(target.value)) return;
          const date = !target.value ? VALUE.DEFAULT : dateManipulation.convert(target.value);
          changeTask(id, TASK_KEY.DATE, date);
        };
        return inputProps;
      default:
        return inputProps;
    }
  } catch (error) {
    console.error(error.message);
    return inputProps;
  }
};

function Input() {
  return (
    <label className={`${PREFIX.LABEL}-${TASK_KEY.TEXT}`}>
      {TITLE.TASK}
      <input
        type={TYPE.INPUT.TEXT}
        name={TYPE.INPUT.TEXT}
        className={`${PREFIX.INPUT}-${PREFIX.TASK}`}
        placeholder={TITLE.PLACEHOLDER}
        autoComplete={VALUE.OFF}
      />
    </label>
  );
}

export { Input, defineProps, inputProps };
